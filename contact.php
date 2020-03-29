<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<title>SENEŌ - Contact</title>
	<meta name="viewport" content="width=device-width,initial-scale=1.0">
	<meta name="description" content="SENEŌ - Contact"/>
	<meta name="keywords" content="SENEŌ"/>
	<meta name="author" content="Agence LUUUG">
	<meta name="theme-color" content="#142943">
	<?php include '_style.php'; ?>

</head>

<body>
	<?php include '_script.php'; ?>
	<?php include '_loader.php'; ?>
	<?php include '_header.php'; ?>

	<section>
		<div class="banner">
			<div class="deZoomBg" data-background="img/contact-banner.jpg"></div>
		</div>
		<div class="contentPage">

			<div class="container contactPage">
				<div class="row">
					<div class="col-12 col-md-6">
						<p data-title="Contact" class="title">Contactez-nous</p>
						<h1 class="paragraphe big-p">Nous serons ravis de vous aider dans la concrétisation de votre projet, aménagement extérieur.</h1>
						<div class="infos-contact">
							<p><img src="img/phone.png" alt="Icone Téléphone"><a href="tel:0650855274">+33 (0)6 50 85 52 74</a></p>
							<p><img src="img/mail.png" alt="Icone Email"><span data-mail="contact" data-domain="seneo-concept.fr"></span></p>
							<p><img src="img/location.png" alt="Icone Adresse">82 route de Chaléa<br>
							Conflans<br>
							01250 Corveissiat<br>
							FRANCE</p>
						</div>
					</div>
					<div class="col-12 col-md-6">
						<form action="">
							<div class="row">
								<div class="col-12 col-sm-6 col-md-12 col-lg-6 data-champ">
									<label for="form-name">Nom / Prénom</label>
									<input class="data-champ-focus" id="form-name" type="text">
								</div>
								<div class="col-12 col-sm-6 col-md-12 col-lg-6 data-champ">
									<label for="form-mail">Adresse e-mail</label>
									<input class="data-champ-focus" id="form-mail" type="email">
								</div>
								<div class="col-12 data-champ">
									<label for="form-sujet">Sujet</label>
									<input class="data-champ-focus" id="form-sujet" type="text">
								</div>
								<div class="col-12 data-champ">
									<label for="form-message">Message</label>
									<textarea class="data-champ-focus" id="form-message" type="text"></textarea>
								</div>
								<div class="col-12 data-champ">
									<input type="submit">
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>

		</div>
	</section>

	<?php include '_footer.php'; ?>

</body>
</html>
