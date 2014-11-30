<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Richard Marquez</title>
    <link rel="stylesheet" type="text/css" href="main.css" />
    <link rel="icon" href="resources/favicon.png" />
    <link rel="apple-touch-icon-precomposed" href="resources/favicon.png" />
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="main.js"></script>
  </head>
  <body>
    <header>
      <div class="container">
        <h1 id="title">Richard Marquez</h1>
        <nav>
          <ul>
            <li><a href="https://github.com/richard92m">Code</a></li>
            <li><a href="http://richard92m.svbtle.com/">Writings</a></li>
            <li><a href="http://careers.stackoverflow.com/richard92m">R&eacute;sum&eacute;</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div class="clear"></div>
      </div>
    </header>

    <section id="writings">
      <div class="container">
        <h2>Writings</h2>
      </div>
    </section>

    <section id="portfolio">
      <div class="container">
        <h2>Portfolio</h2>
        <ul>
          <?php
            $portfolioDir = 'portfolio/';
            $portfolioImageDir = $portfolioDir . 'images/';
            $files = scandir($portfolioImageDir);

            foreach ($files as $file) {
              // Do not include hidden files
              if (preg_match('/^\./', $file) == 1) {
                continue;
              }

              $info = pathinfo($file);
              $cleanName = basename($file, '.' . $info['extension']);

              echo '<li>';

              echo '<h3>' . $cleanName . '</h3>';
              echo '<img alt="' . $cleanName . '" src="' . $portfolioImageDir . $file . '" />';

              echo '</li>';
            }
            
          ?>
        </ul>
      </div>
    </section>

    <section id="feed">
      <div class="container">
        <h2>Feed</h2>
      </div>
    </section>

    <footer>
      <div class="container">
        <img id="gravatar" src="http://www.gravatar.com/avatar/fc42561857fe799ddb21988f73675681.png" alt="Gravatar" />
        <ul id="social-media">
          <li><a href="https://www.facebook.com/richard92m"><img alt="Facebook" src="resources/social_media/facebook.png" /></a></li>
          <li><a href="http://www.linkedin.com/pub/richard-marquez/84/927/733/"><img alt="LinkedIn" src="resources/social_media/linkedin.png" /></a></li>
          <li><a href="https://github.com/richard92m"><img alt="Skype" src="resources/social_media/skype.png" /></a></li>
        </ul>
        <ul id="contact">
          <li><h3>Email:</h3> <a href="mailto:richard92m@me.com">richard92m@me.com</a></li>
          <li><h3>Skype:</h3> richard92m</li>
          <li><h3>Phone:</h3> 507.450.2426</li>
          <li>Winona, MN - U.S.A.</li>
        </ul>
      </div>
      <div class="clear"></div>
    </footer>
  </body>
</html>

