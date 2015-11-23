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
				_this.mostrar = velocidadInicial();
				break;
			case 'vf':
				_this.mostrar = velocidadFinal();
				break;
			case 'a':
				_this.mostrar = aceleracion();
				break;
			case 't':
				_this.mostrar = tiempo()
				break;
			case 'd':
				_this.mostrar = distancia();
				break;
		}
	}

	function velocidadInicial(){

		//Vi = Vf - a.t
		_this.formula = [];
		var vi = gbVf - (gbA * gbT);
		_this.formula.push({
			definicion: "vi = vf - a * t",
			despeje: ""+gbVf+" - "+gbA+" * "+gbT+"",
			resultado: vi

		});
		// Vi = (Δx - a.t²/2)/t
		if(isNaN(vi)){
			_this.formula = [];
			vi = (gbD - (gbA * Math.pow(gbT,2))/2)/gbT;
			_this.formula.push({
				definicion: "vi = ( Δx - ( a * (t)² ) / 2  ) / t",
				despeje: "( "+gbD+" - ("+gbA+" * ("+gbT+")² ) / 2 ) / "+gbT+"",
				resultado: vi
			});
		}
		//Vi = 2.Δx/t - Vf
		if(isNaN(vi)){
			_this.formula = [];
			vi = ( (2 * gbD) / gbT ) - gbVf;
			_this.formula.push({
				definicion: "vi = ( ( 2 * Δx ) / t ) - vf )",
				despeje: "( ( 2 * "+gbD+" ) / "+gbT+" ) - "+gbVf+"",
				resultado: vi
			});
		}
		//vi = raiz(vf al cuadrado - 2.a.Δx)
		if(isNaN(vi)){
			_this.formula = []
			vi = Math.sqrt(Math.pow(gbVf, 2) - 2 * gbA * gbD )
			_this.formula.push({
				definicion: "vi = √ (Vf)² - 2 * a * Δx",
				despeje: "√ ("+gbVf+")² - 2 * "+gbA+" * "+gbD+"",
				resultado: vi
			});
		}

		if (isNaN(vi)){
			vi = false;
		}

		return vi;

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

	function tiempo(){
		// t = (Vf - Vi)/a
		_this.formula = [];
		var t = ( gbVf - gbVi ) / gbA;
		_this.formula.push({
			definicion: "t = ( Vf - Vi ) / a",
			despeje: "("+gbVf+" - "+gbVi+" ) / "+gbA+"",
			resultado: t

		});
		//t = 2.Δx/(Vf + Vi)
		if(isNaN(t)){
			_this.formula = [];
			t = (2 * gbD) / (gbVf + gbVi);
			_this.formula.push({
				definicion: "t = ( 2 * Δx ) / ( Vf + Vi )",
				despeje: "(2 * "+gbD+") / ( "+gbVf+" + "+gbVi+" )",
				resultado: t
			});
		}

		if (isNaN(t)){
			t = false;
		}

		return t;

	}

	function distancia(vi, t, a){
		//Δx = Vi.t + a.t²/2
		//Δx = (Vf² - Vi²)/2.a
		//Δx = t.(Vf + Vi)/2
		//Δx = Vf.t - a.t²/2
		//Vi = Vf - a.t
		_this.formula = [];
		var vi = gbVf - (gbA * gbT);
		_this.formula.push({
			definicion: "vi = vf - a * t",
			despeje: ""+gbVf+" - "+gbA+" * "+gbT+"",
			resultado: vi

		});
		// Vi = (Δx - a.t²/2)/t
		if(isNaN(vi)){
			_this.formula = [];
			vi = (gbD - (gbA * Math.pow(gbT,2))/2)/gbT;
			_this.formula.push({
				definicion: "vi = ( Δx - ( a * (t)² ) / 2  ) / t",
				despeje: "( "+gbD+" - ("+gbA+" * ("+gbT+")² ) / 2 ) / "+gbT+"",
				resultado: vi
			});
		}
		//Vi = 2.Δx/t - Vf
		if(isNaN(vi)){
			_this.formula = [];
			vi = ( (2 * gbD) / gbT ) - gbVf;
			_this.formula.push({
				definicion: "vi = ( ( 2 * Δx ) / t ) - vf )",
				despeje: "( ( 2 * "+gbD+" ) / "+gbT+" ) - "+gbVf+"",
				resultado: vi
			});
		}
		//vi = raiz(vf al cuadrado - 2.a.Δx)
		if(isNaN(vi)){
			_this.formula = []
			vi = Math.sqrt(Math.pow(gbVf, 2) - 2 * gbA * gbD )
			_this.formula.push({
				definicion: "vi = √ (Vf)² - 2 * a * Δx",
				despeje: "√ ("+gbVf+")² - 2 * "+gbA+" * "+gbD+"",
				resultado: vi
			});
		}

		if (isNaN(vi)){
			vi = false;
		}

		return vi;

	}

	function aceleracion (vi, vf, t){

		//a = 2.(Vf.t - Δx)/t²
		// a = (Vf - Vi)/t
		//a = 2.(Δx - Vi.t)/t²
		//a = (Vf² - Vi²)/2.Δx
		console.log('a');


	}


}