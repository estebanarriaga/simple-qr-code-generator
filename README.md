<p align="center">
  <a href="https://generator.estebanarriaga.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://chart.googleapis.com/chart?chl=generator.estebanarriaga.com&choe=UTF-8&chs=300x300&cht=qr&chld=L">
      <img src="https://chart.googleapis.com/chart?chl=generator.estebanarriaga.com&choe=UTF-8&chs=300x300&cht=qr&chld=L" height="128">
    </picture>
  </a>
</p>

<p align="center">
  <a aria-label="generator.estebanarriaga.com" href="generator.estebanarriaga.com">
    <h3 align="center">generator.estebanarriaga.com</h3>
  </a>
</p>

## QR Generator

I was tired of **'Free'** QR code generating webisites. All of them force you to create an account or pay a fee just for a simple QR code!

As a developer this is a complete waste of time for something that simple, so I've created my own.

### Try it out

Visit the [website](https://generator.estebanarriaga.com) if you want to save time.

### How it works

Google provides an API for chart generation [(full documentation)](https://developers.google.com/chart/infographics/docs/qr_codes) 
The Google API just has to be called with a set a URI components.

|                |Description											|Required?                         |
|----------------|-------------------------------|-----------------------------|
|`cht=qr`|Specifies that it's a QR code.|*Required*|
|`chs=<_width_>x<_height_>` |Image size.|*Required*|
|`choe=<_data_>`|How to encode the data in the QR code. UTF-8 in our case.|*Required*|
|`chld=<_margin_>`|he width of the white border around the data portion of the code. This is in _rows_, not in _pixels_|*Optional*|
|`chl=<data>`|The data to encode|*Required*

**Example**: 
* For encoding <ins>generator.estebanarriaga.com</ins> we sent this values to the API:

| Key | Value |
|------|-------|
|`api-url:`|`https://chart.googleapis.com/chart?`|
|	`chl`|`generator.estebanarriaga.com`|
|`choe`|`UTF-8`|
|`chs`|`300x300`|
|`cht`| `qr`|
|`chld`|`L`|
|

### Sofware
The page id built using:
* [Tailwind css](https://tailwindcss.com/): For fast styling
* [Next.js 13](https://nextjs.org/): As a React framework 
* [Typescript](https://www.typescriptlang.org/): For types
* [shadcn/ui](https://ui.shadcn.com/): For the components