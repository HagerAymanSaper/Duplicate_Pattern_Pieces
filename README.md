# Duplicate Pattern Pieces

A Photoshop ExtendScript (.jsx) automation tool for quickly creating multiple copies of a selected pattern-piece layer.

## Features
- Custom number of copies (1–500).
- Original layer remains unchanged.
- Automatically names duplicated layers.
- Copies are stacked over the original.
- Input validation and error handling.

## How to Use
1. Open your Photoshop document.
2. Select one pattern-piece layer in the Layers panel.
3. Run `Duplicate_Pattern_Pieces.jsx`.
4. Enter the number of copies.
5. Run your Nesting script to arrange the duplicated pieces.

## Requirements
- Adobe Photoshop
- A document with at least one selected ArtLayer

## Notes
All duplicates are created directly above the original layer and remain stacked until arranged by the nesting script.
