<?php

function sanitize($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);

  return $data;
}

$error = '';
$success = '';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  if ($_POST['name'] && $_POST['name'] != 'name' &&
    $_POST['email'] && $_POST['email'] != 'email' &&
    $_POST['message'] && $_POST['message'] != 'message') {

    $email = sanitize($_POST['email']);
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $name = sanitize($_POST['name']);
      $message = sanitize($_POST['message']);

      $to      = 'richard92m@me.com';
      $subject = "richardmarquez.xyz - $name";
      $headers = "From: $email" . "\r\n" .
            "Reply-To: $email" . "\r\n" .
                'X-Mailer: PHP/' . phpversion();

      mail($to, $subject, $message, $headers);
      $success = 'Thanks for the message. I\'ll get back to you shortly.';
    } else {
        $error = 'Please enter a valid email.';
    }

  } else {
    $error = 'Please fill out all fields.';
  }
}

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />

    <title>Richard Marquez</title>
    <!-- When no description tag is present, first paragraph is used
         (the "About" blurb in this case)
    <meta name="description" content="" />-->

    <link rel="stylesheet" type="text/css" href="main.css" />
    <link rel="stylesheet" type="text/css" href="small-screen.css" />
    <link rel="stylesheet" type="text/css" href="large-screen.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
    <link rel="icon" href="resources/favicon.png" />
    <link rel="apple-touch-icon-precomposed" href="resources/favicon.png" />
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="main.js"></script>
  </head>
  <body>
    <?php
      if ($error != '') {
        ?>
        <p class="form-alert red-alert">
          <?=$error;?>
        </p>
        <?php
      }

      if ($success != '') {
        ?>
        <p class="form-alert green-alert">
          <?=$success;?>
        </p>
        <?php
      }
    ?>
    <header>
      <div class="container">
        <h1 id="title">Richard Marquez</h1>
        <nav>
          <ul>
            <li><a href="https://github.com/richard92m">Code</a></li>
            <li><a href="http://scriptogr.am/richard92m/archive">Writings</a></li>
            <li><a href="http://careers.stackoverflow.com/richard92m">R&eacute;sum&eacute;</a></li>
            <li><a class="button" href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div class="clear"></div>
      </div>
    </header>

    <section class="about gray grid">
      <div class="container">
        <img class="gravatar" src="resources/richardmarquez.jpg" alt="Gravatar" />

        <ul class="social-media">
          <li><a href="https://www.facebook.com/richard92m"><img alt="Facebook" src="resources/social_media/facebook.png" /></a></li>
          <li><a href="http://www.linkedin.com/pub/richard-marquez/84/927/733/"><img alt="LinkedIn" src="resources/social_media/linkedin.png" /></a></li>
          <li><a href="https://github.com/richard92m"><img alt="GitHub" src="resources/social_media/github.png" /></a></li>
        </ul>

        <div class="info">
          <p>
            <img src="resources/email.png" /><a href="mailto:richard92m@me.com">richard92m@me.com</a><br />
            <img src="resources/location.png" />Winona, MN
          </p>
      </div>

      <p class="blurb">
        Hi, my name is Richard Marquez and I'm a full-stack software developer
        and designer. Below, you can check out some of the products that I've shipped.
        Feel free to <a href="#contact">get in touch</a>!
      </p>
    </section>

    <section class="work">
      <div class="container">
        <div class="pic">
          <img src="resources/portfolio/upac.png" alt="Winona State UPAC" />
        </div>

        <h2>Winona State UPAC</h2>

        <ul class="skills">
          <li>iOS</li>
          <li>Swift</li>
          <li>Backend</li>
          <li>Parse</li>
        </ul>

        <div class="blurb">
          <p>
          <a href="http://www.winona.edu/upac/">UPAC</a> is Winona State University's
          student organization enhancing the college experience through entertainment
          and events.
          </p>
          <p>
          See upcoming events and get notifications, enter raffles, view photos,
          and contact board members. Makes use of the
          <a href="http://developers.facebook.com">Facebook</a> and
          <a href="http://parse.com">Parse</a> APIs to manage information about
          events and raffles.
          </p>
        </div>

        <a href="https://itunes.apple.com/us/app/winona-state-upac/id944827063" target="_blank">
        <img class="badge" src="resources/app_store_badge.png" alt="See on App Store" />
        </a>

        <div class="clear"></div>
      </div>
    </section>

    <section class="work">
      <div class="container">
        <div class="pic">
          <img src="resources/portfolio/miller.png" alt="Miller Ingenuity" />
        </div>

        <h2>Miller Ingenuity</h2>

        <ul class="skills">
          <li>Design</li>
          <li>Web</li>
          <li>Systems</li>
        </ul>

        <div class="blurb">
          <p>
            I was the lead systems designer for an online <a href="http://stage-gate.com">
            Stage-Gate</a> product development implementation with multi-user
            support at <a href="http://milleringenuity.com">Miller Ingenuity</a>.
          </p>
          <p>
            This included the overall user-experience, data schema, as well as
            the design.
          </p>
        </div>
        <div class="clear"></div>
      </div>
    </section>

    <section class="work">
      <div class="container">
        <div class="pic">
          <br/><br/><br/>
          <img src="resources/portfolio/freac.png" alt="fre.ac" />
        </div>

        <h2>fre.ac</h2>

        <ul class="skills">
          <li>iOS</li>
          <li>Swift</li>
          <li>SpriteKit</li>
          <li>Game</li>
        </ul>

        <p class="blurb">
          fre.ac is an arena arcade game with an orginal hand-drawn style that
          I am currently developing for the iOS platform to be released in Q2 of 2015.
        </p>

        <a href="https://github.com/richard92m/three.bar" target="_blank">
        <img class="badge" src="resources/github_badge.png" alt="See on GitHub" />
        </a>

        <div class="clear"></div>
      </div>
    </section>


    <section id="contact" class="contact gray grid">
      <div class="container">
        <h2>Get in Touch</h2>
        <h3><img src="resources/available.png" alt="Available" /> Available Now</h3>

        <div class="info">
          <ul class="social-media">
            <li><a href="https://www.facebook.com/richard92m"><img alt="Facebook" src="resources/social_media/facebook.png" /></a></li>
            <li><a href="http://www.linkedin.com/pub/richard-marquez/84/927/733/"><img alt="LinkedIn" src="resources/social_media/linkedin.png" /></a></li>
            <li><a href="https://github.com/richard92m"><img alt="GitHub" src="resources/social_media/github.png" /></a></li>
          </ul>

          <ul class="blurb">
            <li><h4>Email:</h4> <a href="mailto:richard92m@me.com">richard92m@me.com</a></li>
            <li><h4>Skype:</h4> richard92m</li>
            <li><h4>Phone:</h4> 507.450.2426</li>
            <li>Winona, MN - U.S.A.</li>
          </ul>
        </div>

        <form id="contact-form" method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>">

          <input type="text" id="contact-name" name="name" value="<?php
            if (isset($_POST['name']) && $success == '') {
              echo $_POST['name'];
            } else {
              echo 'name';
            }
          ?>" />

          <input type="text" id="contact-email" name="email" value="<?php
            if (isset($_POST['email']) && $success == '') {
              echo $_POST['email'];
            } else {
              echo 'email';
            }
          ?>" />

          <textarea id="contact-message" name="message"><?php
            if (isset($_POST['message']) && $success == '') {
              echo $_POST['message'];
            } else {
              echo 'message';
            }
          ?></textarea>

          <input class="button" type="submit" value="Submit" />
        </form>

        <div class="clear"></div>
      </div>
    </section>

    <footer>
      <p>
        Copyright <em>Richard Marquez</em> 2015 
        <span class="links"><a href="http://linode.com">Linode</a> | <a href="http://lighttpd.net">Lighttpd</a></span>
      </p>
    </footer>
  </body>
</html>

