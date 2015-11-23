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

		gbVi = (vi == null)? undefined: vi;
		gbVf = (vf == null)? undefined: vf;
		gbA = (a == null)? undefined: a;
		gbT = (t == null)? undefined: t;
		gbD = (d == null)? undefined: d;

		switch(pregunta){
			case 'vi':
				velocidadInicial(vf, a, t);
				break;
			case 'vf':
				_this.mostrar = velocidadFinal();
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
	}

	function velocidadFinal(){
		_this.formula = [];
		var vf = gbVi + (gbA * gbT);
		_this.formula.push({
			definicion: "vf = vi + a * t",
			despeje: ""+gbVi+" + "+gbA+" * "+gbT+"",
			resultado: vf

		});

		if(isNaN(vf)){
			_this.formula = [];
			vf = (2 * gbD - gbVi*gbT)/gbT;
			_this.formula.push({
				definicion: "vf = (2 * Δx - vi * t)/t",
				despeje: "(2 * "+gbD+" - "+gbVi+" * "+gbT+") / "+gbT+"",
				resultado: vf
			});
		}

		if(isNaN(vf)){
			_this.formula = [];
			vf = (2 * gbD + gbA * Math.pow( gbT, 2 ))/ 2*gbT;
			_this.formula.push({
				definicion: "vf = ( 2 * Δx + a * t² ) / 2t",
				despeje: "( 2 * "+gbD+" + "+gbA+" * ("+gbT+")² ) / 2 * "+gbT+"",
				resultado: vf
			});
		}

		if(isNaN(vf)){
			_this.formula = []
			vf = Math.sqrt(Math.pow(gbVi, 2)+ 2 * gbA * gbD )
			_this.formula.push({
				definicion: "vf = √ (Vi)² + 2 * a * Δx",
				despeje: "√ ("+gbVi+")² + 2 * "+gbA+" * "+gbD+"",
				resultado: vf
			});
		}

		if (isNaN(vf)){
			vf = false;
		}

		return vf;

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