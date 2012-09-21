<?php 
class Brain extends AppModel {
	public function getResponse($message) {
		return findAllByMessage($message);	
	}
}