---
name: dot-image
description: Generate expressive pixel-art characters, animations, cinematic scenes, backgrounds, and icons as PNG assets, then enforce true pixel-grid output with the bundled harness. Use for dot art, game sprites, sprite sheets, animation frames, layered environments, or pixel-art icons. Defaults to fantasy when no theme is specified.
---

# Dot Image

Generate a raster asset or animation sheet, apply the selected visual theme, normalize it onto a fixed pixel grid, and deliver verified outputs from `src/assets/clean/`.

## Asset Specifications

| Type | Working grid | Final size | Required prompt terms |
| --- | --- | --- | --- |
| `char` | 64 x 64 | 256 x 256 | `expressive modern pixel art`, `deliberate pixel clusters`, `solid black background`, `distinctive game character` |
| `bg` | 128 x 128 | 512 x 512 | `layered pixel-art scenery`, `foreground midground background depth`, `restrained atmospheric lighting` |
| `scene` | 640 x 360 | 1280 x 720 | `cinematic side-scrolling pixel-art scene`, `dense environmental storytelling`, `deep foreground framing`, `readable gameplay plane` |
| `icon` | 32 x 32 | 128 x 128 | `distinctive silhouette`, `selective colored outlines`, `transparent alpha` |

The listed final size uses the default `4x` scale. Use `--scale 1` when the user requests native working-grid dimensions, such as a true `64x64` character or `32x32` icon.

## Output Mode

- Use static mode for one character pose, compact background, cinematic scene, or icon. It remains the default and produces one clean PNG.
- Use `scene` for a full-screen or panoramic environment. Read [references/cinematic-scenes.md](references/cinematic-scenes.md) before generating. Keep `bg` for compact backgrounds, textures, and tiles.
- Use animation mode when the user requests motion, states, frames, or a sprite sheet. Read [references/animation.md](references/animation.md) before generating.
- When animating an existing asset, provide the clean PNG to the image-generation capability as the visual reference. Preserve its identity, proportions, palette roles, equipment, facing direction, and pixel-cluster language across every frame.
- The harness normalizes and validates supplied frames; it does not invent missing motion frames.

## Theme Selection

- Use `fantasy` when the user does not specify a theme.
- Built-in themes are `fantasy`, `sci-fi`, `modern`, `cute`, and `horror`.
- Follow an explicit user choice. Do not silently replace it with the default.
- Read [references/themes.md](references/themes.md) for the selected theme's prompt direction and harness behavior.

## Shared Art Direction

- Use expressive modern pixel art built from chunky, deliberate pixel clusters.
- For cinematic scenes, increase detail density while preserving deliberate clusters, strong value grouping, and a readable gameplay plane.
- Keep characters charming and approachable without relying on emoji-like faces or extremely oversized eyes.
- Give characters distinctive silhouettes, readable poses, controlled asymmetry, and personality through posture and small details.
- Prefer selective deep-colored outlines over uniform pure-black contours.
- Use rich cool shadows and focused warm highlights. Reserve the brightest pixels for focal points.
- Avoid isolated pixel noise, automatic dithering, smooth vector-like curves, glossy mobile-game rendering, blur, and sprite antialiasing.
- Preserve useful transparency. Character isolation backgrounds are removed by the harness; background tiles may remain fully opaque where the artwork requires it.
- Read [references/art-direction.md](references/art-direction.md) before generating. Apply the asset-specific rules for characters, environments, or icons.

## Workflow

1. Identify the asset type as `char`, `bg`, `scene`, or `icon`. If the request is ambiguous, infer it from the intended game use when safe.
2. Select the theme. Use the user's explicit choice or `fantasy` when omitted.
3. Inspect the project for existing naming and asset conventions. Use a descriptive kebab-case PNG filename.
4. Build the generation prompt from the user's subject, the expressive modern pixel-art direction, the selected theme profile, the relevant asset-specific rules, and every required prompt term for the selected asset type. Describe visual properties directly; do not request a copy of an existing game's characters, UI, logo, or proprietary assets.
5. Generate one raster PNG with the available image-generation capability. For animation mode, generate one evenly divided sprite sheet following [references/animation.md](references/animation.md). Prefer `$generate2dsprite` when it is installed. Do not substitute SVG, CSS, emoji, or an icon library.
6. Save the unprocessed static image or sprite sheet to `src/assets/raw/<filename>.png`. Create the directory when needed.
7. Run the bundled harness from the project root. The `--theme` option may be omitted only for the default `fantasy` theme. Static mode remains backward compatible:

   ```bash
   python .codex/skills/dot-image/scripts/dot_harness.py <char|bg|scene|icon> <filename>.png --theme <theme>
   ```

   For animation mode, declare the exact frame count and sheet columns:

   ```bash
   python .codex/skills/dot-image/scripts/dot_harness.py char <filename>.png --theme <theme> --frames 6 --columns 6 --animation idle --fps 8 --anchor bottom-center --scale 1
   ```

8. Treat a nonzero exit code or a failed verification as a blocking failure. Correct the input or regenerate it, then rerun the harness. Do not copy an unchecked raw image into the clean directory.
9. Inspect the clean PNG at native size and enlarged nearest-neighbor size. For animation, also inspect the individual frame sequence and loop continuity. Confirm the silhouette, focal pixels, selective outlines, transparency, and theme remain legible without noise, cropping, jitter, or distortion.
10. Report the raw path, clean path, asset type, theme, dimensions, and harness result. Animation mode additionally produces `src/assets/clean/<stem>/frame-###.png` and `src/assets/clean/<stem>.animation.json`. The harness appends a machine-readable record to `src/assets/clean/dot-harness.log`.

## Operational Boundaries

- Always keep generated source images in `src/assets/raw/` and processed results in `src/assets/clean/`.
- Never edit or overwrite a different existing asset to satisfy a new request.
- If Pillow or image generation is unavailable, stop and state the missing dependency or capability instead of fabricating a result.
- Keep implementation changes outside the asset folders scoped to what the user explicitly requested.
