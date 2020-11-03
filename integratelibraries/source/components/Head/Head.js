import Head from 'next/head';

function head() {
    //create listeners Jquery

  return (
    <Head>
      <title>Viewer-Imgs</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link> 


      {/* NEED IN OUR SERVICE PAGE  */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.css" integrity="sha512-Velp0ebMKjcd9RiCoaHhLXkR1sFoCCWXNp6w4zj1hfMifYB5441C+sKeBl/T/Ka6NjBiRfBBQRaQq65ekYz3UQ==" crossorigin="anonymous" ></link>

        {/* jQuery */}
        <script type="text/javascript" src="/static/Libs/jquery-3.2.1.slim.min.js"></script>
        <script type="text/javascript" src="/static/Libs/popper.min.js"></script>
        <script type="text/javascript" src="/static/Libs/tether.min.js"></script>
        <script type="text/javascript" src="/static/Libs/bootstrap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.min.js" integrity="sha512-Y2IiVZeaBwXG1wSV7f13plqlmFOx8MdjuHyYFVoYzhyRr3nH/NMDjTBSswijzADdNzMyWNetbLMfOpIPl6Cv9g==" crossorigin="anonymous"></script>

      {/* ENDED NEED IN OUR SERVICE PAGE */}

    </Head>
  )
}

export default head