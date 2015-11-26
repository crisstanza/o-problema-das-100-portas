function startSimulation() {
	var doors = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ];
	
	var step;
	var step_size;

	/* loop through steps */
	for (step=0;step<10;step++) {
		/* loop through step_sizes */
		for (step_size=step;step_size<10;step_size+=(step+1)) {
			simulator.click(doors[step_size]);
		}
	}
	alert("Sucesso");
}


function test() {

	var input = 1;
	// nothing!
	var expected = 'door open';

	simulator.click(input);

	var door = document.getElementById('door-' + (input - 1));
	var current = door.getAttribute('class');

	assertEquals(current, expected);
}

function assertEquals(v1, v2) {
	if (v1 == v2) {
		// sucesso!
	} else {
		throw new Error('['+v1+'] and ['+v2+'] are not equals');
	}
}
