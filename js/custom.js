jQuery(document).ready(function() {
	var val = jQuery(this).val();
	jQuery("#regionSelector").change(function() {
		var infoText = jQuery(this).find('option:selected').data('infotext');
		jQuery("#deliveryInfoText").html(infoText);
		if (infoText.length === 0) {
			jQuery("#parentDeliveryInfoText").addClass("hide");
		} else {
			jQuery("#parentDeliveryInfoText").removeClass("hide");
		}
	});

	$step = jQuery(".counter");
	$step.find("#first").attr("style", "color: #009a05;");
	$faq = jQuery("#faq");
	$stepOne = jQuery("#stepOne"); $headerStepOne = jQuery("#headerStepOne"); $stepOneSubmit = jQuery("#stepOneSubmit");
	$stepTwo = jQuery("#stepTwo"); $stepTwoSummary = jQuery("#stepTwoSummary"); $stepTwoSubmit = jQuery("#stepTwoSubmit");
	$stepThree = jQuery("#stepThree"); $stepThreeSubmit = jQuery("#stepThreeSubmit");

	$faq.removeClass("hide"); $headerStepOne.removeClass("hide"); $stepOne.removeClass("hide");
	jQuery($stepOneSubmit).click(function() {
		$headerStepOne.addClass("hide"); $stepOne.addClass("hide");
		$step.find("#first").removeAttr("style"); $step.find("#second").attr("style", "color: #009a05;");
		$stepTwo.removeClass("hide"); $stepTwoSummary.removeClass("hide"); $stepTwoSubmit.removeClass("hide");
	});
	jQuery($stepTwoSubmit).click(function() {
		$step.find("#second").removeAttr("style"); $step.find("#third").attr("style", "color: #009a05;");
		$stepTwo.addClass("hide"); $stepTwoSummary.addClass("hide"); $stepTwoSubmit.addClass("hide"); $faq.addClass("hide");
		$stepThree.removeClass("hide"); $stepThreeSubmit.removeClass("hide");
		$stepThreeSubmit.click(function() {
			window.location.href = 'order-success.html';
		});
	});
});