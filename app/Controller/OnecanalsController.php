<?php
class OnecanalsController extends AppController {
	public $helpers = array('Html','Form','Js','Time');



	public function index(){
		//$variables = $this->Onecanal->findById(2);
		//$var = $variables['Onecanal']['id'];
		//$this->set('variables',$var);
	}

	public function obtener(){
		$this->layout = 'ajax';
		$this->autoRender = false;
		
		$resultado = $this->Onecanal->findById($_GET['id']);
		$variable = $resultado['Onecanal']['estado'];
		echo $variable;
		//$this->set('variable', $variable);
	}

}
?>
