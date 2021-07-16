package edu.escuelaing.Tablero;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PointsController {

	@GetMapping("/points")
	public String processPoints(@RequestParam(name="payload", defaultValue = "{points:[]}")String points) {
		return points;
	}
}
