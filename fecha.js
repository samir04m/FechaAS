function Fecha(){

	this.getDate = function () {
		this.day = $('#day').val();
		this.month = $('#month').val();
		this.year = $('#year').val();
	}

	this.getDateLatin = function (){
		return this.day+"/"+this.month+"/"+this.year;
	};

	this.getDateUS = function (){
		return this.month+"/"+this.day+"/"+this.year;
	};

	this.getDay = function () {
		return this.day;
	};

	this.getMonth = function () {
		return this.month;
	};

	this.getYear = function () {
		return this.year;
	};

	this.sumSevenDays = function () {

	};

	this.validateDate = function () {
		if (this.month > 12 || this.month < 1) {
			return "Fecha invalida";
		}else{
			if (this.isLeapYear()){
				if (this.month == 2){
					if (this.day > 29) return "Fecha invalida";
				}else{
					if (this.day > ndias[this.month] ) return "Fecha invalida";
				}
			}else {
				if (this.day > ndias[this.month] ) {
					return "Fecha invalida";
				}
			}
		}
		return "Fecha valida";
	};

	this.isLeapYear = function () {
		if ( (this.year%4 == 0) && ((this.year%100 != 0) || (this.year%400 == 0)) ) return true;
		return false;
	};

}	