# Product photos

Drop real product images in this folder. A card automatically shows the photo
once the file exists; until then it falls back to the icon placeholder.

To wire a photo for a product, set its `image` field in `lib/catalog.ts`, e.g.
`image: "/products/<filename>.jpg"`.

Currently expected:

- `filter-integrity-tester.jpg` — เครื่องทดสอบการรั่วของไส้กรอง (Neuronbc Filter Integrity Tester)

Suggested filenames for the rest (set the `image` field when you add them):
imaflow.jpg, imapure.jpg, imapex.jpg, air-sampler.jpg, glove-integrity-tester.jpg,
disinfectant-test-kit.jpg, sanosil-5kg.jpg, sanosil-1kg.jpg, qjet-ct20.jpg, qjet-ct10.jpg

Recommended: square-ish or 4:3, white background, ~800px, JPG or PNG.
