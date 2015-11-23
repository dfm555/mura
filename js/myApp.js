/**
 * Created by root on 17/10/15.
 */
angular
	.module('muraApp',[])
	.controller('calculateController', calculateController );

function calculateController() {
	'use strict';

	var _this = this, gbVi, gbVf, gbA, gbT, gbD;
	_this.calculate = function(vi, vf, a, t, d, pregunta) {
		gbVi = vi;
		gbVf = vf;
		gbA = a;
		gbT = t;
		gbD = d;

		switch(pregunta){
			case 'vi':
				console.log(velocidadInicial(vf, a, t));
				break;
			case 'vf':
				console.log(velocidadFinal());
				break;
			case 'a':
				aceleracion(vi, vf, t)
				break;
			case 't':
				tiempo(vf, vi, a)
				break;
			case 'd':
				distancia(vi, t, a);
				break;
		}
	}

	function velocidadInicial( vf, a, t ){
		//Vi = 2.Δx/t - Vf
		// Vi = (Δx - a.t²/2)/t
		//Vi = Vf - a.t
		//vi = raiz(vf al cuadrado - 2.a.Δx)
		var frmVf = (vf === undefined) ? velocidadFinal(gbVi, a, t): vf;
		var frmA = (a === undefined) ? aceleracion(gbVi, vf, t): a;
		var frmt = (t === undefined) ? tiempo(vf, gbVi, a): t;
		return frmVf - (frmA * frmt);

	}

	function velocidadFinal(){

		var vf = gbVi + (gbA* gbT);
		if(isNaN(vf)){
			vf = (2 * gbD - gbVi*gbT)/gbT;
			console.log("(2 * gbD - gbVi*gbT)/gbT;")
			if(isNaN(vf)){
				vf = (2 * gbD + gbA * Math.pow( gbT, 2 ))/ 2*gbT;
				if(isNaN(vf)){
					vf = Math.sqrt(Math.pow(gbVi, 2)+ 2 * gbA * gbD )
				}
				if (isNaN(vf)){
					vf = false;
				}
			}

		}
		return vf;

		//Vf = Vi + a.t
		//Vf = (2.Δx - Vi.t)/t
		//vf = (2.Δx + a.t²)/2t
		//vi = raiz(vi al cuadrado + 2.a.Δx)
		//var frmVi = (vi === undefined) ? velocidadInicial(gbVf, a, t): vi;
		//var frmA = (a === undefined) ? aceleracion(vi, gbVf, t): a;
		//var frmt = (t === undefined) ? tiempo(vi, gbVf, a): t;
		//return frmVi + (frmA * frmt);

	}

	function tiempo(vf, vi, a){
		// t = (Vf - Vi)/a
		//t = 2.Δx/(Vf + Vi)
		console.log('t');

	}

	function distancia(vi, t, a){
		//Δx = Vi.t + a.t²/2
		//Δx = (Vf² - Vi²)/2.a
		//Δx = t.(Vf + Vi)/2
		//Δx = Vf.t - a.t²/2
		console.log('d');

	}

	function aceleracion (vi, vf, t){

		//a = 2.(Vf.t - Δx)/t²
		// a = (Vf - Vi)/t
		//a = 2.(Δx - Vi.t)/t²
		//a = (Vf² - Vi²)/2.Δx
		console.log('a');


	}


}