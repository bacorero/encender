
	timer = setTimeout("temporizador()",1000);

	function temporizador(){
	$("document").ready(
		function(){

				var id = $('#canal').val();
				$.ajax({
						url:'onecanals/obtener',
						type:'get',
						data:{id:id},
						
						success:function(variable){
							if(variable == 1){
								$('#rectangulo').html('ENCENDIDO');
								$('#est').css('color','green');
								$('#rectangulo').css('background','green');
							}
							else{
								$('#rectangulo').html('APAGADO');
								$('#est').css('color','red');
								$('#rectangulo').css('background','red');
							}
						}
					});
				timer = setTimeout("temporizador()",2000);
				});	
			}							
	