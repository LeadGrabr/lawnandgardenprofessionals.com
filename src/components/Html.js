import { default as React, PropTypes } from 'react'
import { renderToString } from 'react-dom/server'
import { default as Helmet } from 'react-helmet'
const { GOOGLE_MAPS_APIKEY } = process.env

const Html = ({ assets, component }) => {
  const content = component ? renderToString(component) : ''
  const head = Helmet.rewind()
  return (
    <html lang='en-us'>
      <head>
        {head.base.toComponent()}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {head.script.toComponent()}
        <style
          dangerouslySetInnerHTML={{
            __html: 'progress,sub,sup{vertical-align:baseline}button,hr,input{overflow:visible}html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0} figcaption, menu,article,aside,details,figure,footer,header,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0} [hidden],template{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}button,input,optgroup,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,input{}button,select{text-transform:none}[type=submit], [type=reset],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}'
          }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: `
            {
              "@context" : "http://schema.org",
              "@type" : "HomeAndConstructionBusiness",
              "name" : "Lawn And Garden Professionals of Ann Arbor",
              "image" : "https://lawnandgardenprofessionals.com/images/logo.gif",
              "url": "https://lawnandgardenprofessionals.com",
              "sameAs": [
                "http://annarborlawngarden.com",
                "http://lawnandgardenprofessionals.com"
              ],
              "telephone" : "734-786-4475",
              "address" : {
                "@type" : "PostalAddress",
                "streetAddress" : "847 Sumpter Road #411",
                "addressLocality" : "Belleville",
                "addressRegion" : "MI",
                "postalCode" : "48111"
              },
              "image": "https://lawnandgardenprofessionals.com/images/logo.gif",
              "description": "If you're looking for lawn care, landscaping, or leaf removal, look no further. Lawn & Garden Professionals is a national brand with local partners. We hand pick lawn and garden partners in your area to ensure only the highest quality of work. Our partners look to us to grow their business, and we look to them to guarantee their landscaping work. Our customers get the best of both worlds!",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "42.195199",
                "longitude": "-83.483737"
              },
              "hasMap": "https://goo.gl/maps/XgpHXqsQupn",
              "openingHours": "Mo, Tu, We, Th, Fr, Sa, Su 06:00-18:00"
            }
          ` }}
        />
      </head>
      <body>
        <div dangerouslySetInnerHTML={{ __html: content }} id='content' />
        <script src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_APIKEY}`} />
        <script charSet='UTF-8' src={`/${assets.main}`} />
        <link rel='stylesheet' href='/style.css' />
      </body>
    </html>
  )
}

Html.propTypes = {
  assets: PropTypes.object.isRequired,
  component: PropTypes.node.isRequired
}

export default Html
