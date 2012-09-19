<?php
class BrainsController extends AppController {
	public function index() {
		$this->set('brains', $this->Brain->find('all'));
	}
}