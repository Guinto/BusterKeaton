<?php 
	echo $this->Html->css('bootstrap.min');
	echo $this->Html->css('bootstrap-responsive.min');
	echo $this->Html->css('brains');
	echo $this->Html->css('messages');

	echo $this->Html->script('brains');
?>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
<script type="text/javascript">
	$(function() {
		var data = <?php echo json_encode($brains); ?>;
		sendMessageSetup(data);
	});
</script>

<div class="container">
	<div class="row">
		<a id="brain" href="#">
		  <span>I am Theo</span>
		</a>
	</div>

	<div class="row">
		<input>
	</div>
	
	<div class="messages row">
	</div>
</div>