function setCalender(){
	
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth() + 1;
	var today = now.getDate();
	
	now.setDate(1);
	var startDay = now.getDay();
	
	var monthdays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	var dateMax = monthdays[month - 1];
	if (month == 2 && ((year%4 == 0 && year%100 != 0) || year%400 == 0)) dateMax = 29;
	
	// 
	var holidays = new Array();
	for (var i=0; i<=dateMax; i++) holidays[i] = 0;
	
	// 祝日(月,日)
	var Holidays1 = new Array(1,1, 1,2, 1,9, 2,11, 2,23, 3,21, 4,29, 5,3, 5,4, 5,5, 7,17, 8,11, 8,14, 8,15, 9,18, 9,23, 10,9, 11,3, 11,23);
	var firstSunday = (startDay == 0)? 1: 8 - startDay;
	for (i=0; i<Holidays1.length; i+=2) {
		if (Holidays1[i] == month) {
			holidays[Holidays1[i+1]] = 1;
			for (var j=firstSunday; j<dateMax; j+=7)
				if (Holidays1[i+1] == j) { holidays[j+1] = 1; break; }
		}
	}
	// 
	var Holidays2 = new Array();
	var firstMonday = (startDay < 2)? 2 - startDay: 9 - startDay;
	for (i=0; i<Holidays2.length; i+=2)
		if (Holidays2[i] == month) holidays[(Holidays2[i+1] - 1) * 7 + firstMonday] = 1;	
		
	// 祝日3：独自の祝日設定(月,日)
	var Holidays3 = new Array();
	var firstSunday = (startDay == 0)? 1: 8 - startDay;
	for (i=0; i<Holidays3.length; i+=2) {
		if (Holidays3[i] == month) {
			holidays[Holidays3[i+1]] = 1;
		}
	}
	
	// 
	var workdays = new Array();
	for (var i=0; i<=dateMax; i++) workdays[i] = 0;
	
	// 営業日：休日で営業する日の設定(月,日)
	var Workdays1 = new Array(5,5);
	for (i=0; i<Workdays1.length; i+=2) {
		if (Workdays1[i] == month) {
			workdays[Workdays1[i+1]] = 1;
		}
	}	
	
	var days = new Array("日", "月", "火", "水", "木", "金", "土");
	
	document.write("<table class='business-calendar'>\n<tr><th colspan=7>" + year + "年" + month + "月</th></tr>\n");
	document.write("<tr><th class='sun'>" + days[0] + "</th>");
	for (i=1; i<6; i++) document.write("<th>" + days[i] + "</th>");
	document.write("<th class='thu'>" + days[6] + "</th></tr>\n");
	
	var col=0;
	if (startDay > 0) {
		document.write("<tr>");
		for ( ; col<startDay; col++) document.write("<td>&nbsp;</td>");
	}
	for (i=1; i<=dateMax; i++) {
		if (col == 0) document.write("<tr>");
		if (i == today) {
			if (holidays[i] == 1 || col == 0) s1 = "<td class='today sun'>";
            // 木曜日(4)を休日に設定
			else if (col == 4) s1 = "<td class='today thu'>";
			else s1 = "<td class='today'>";
		}
		else if (holidays[i] == 1 || col == 0) s1 = "<td class='sun'>";
		else if (workdays[i] == 1 || col == 0) s1 = "<td class='holiday workday'>";
        // 木曜日(4)を休日に設定
		else if (col == 4) s1 = "<td class='thu'>";
		else s1 = "<td>";
		document.write(s1 + i + "</td>");
		if (col == 6) { document.write("</tr>\n"); col=0; } else col++;
	}
	if (col != 0) {
		for ( ; col<7; col++) document.write("<td>&nbsp;</td>");
		document.write("</tr>");
	}
	document.write("</table>");

}

/*　翌月 */
function setCalender2(){
	
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth() + 2;
	if(month > 12){
	    month = 1;
		year = now.getFullYear() + 1;
	}
	var today = now.getDate();
	now.setDate(1);
	
	var monthdays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	var dateMax = monthdays[month - 1];
	if (month == 2 && ((year%4 == 0 && year%100 != 0) || year%400 == 0)) dateMax = 29;
	
	// 翌月の最初の日のみ曜日を設定(0:日 1:月 2:火 3:水 4:木 5:金 6:土)
	var startDay = 2;
	
	// 
	var holidays = new Array();
	for (var i=0; i<=dateMax; i++) holidays[i] = 0;
	
	// 祝日(月,日)
	var Holidays1 = new Array(1,1, 1,2, 1,9, 2,11, 2,23, 3,21, 4,29, 5,3, 5,4, 5,5, 7,17, 8,11, 8,14, 8,15, 9,18, 9,23, 10,9, 11,3, 11,23);
	var firstSunday = (startDay == 0)? 1: 8 - startDay;
	for (i=0; i<Holidays1.length; i+=2) {
		if (Holidays1[i] == month) {
			holidays[Holidays1[i+1]] = 1;
			for (var j=firstSunday; j<dateMax; j+=7)
				if (Holidays1[i+1] == j) { holidays[j+1] = 1; break; } // 
		}
	}

	// 
	var Holidays2 = new Array();
	var firstMonday = (startDay < 2)? 2 - startDay: 9 - startDay;
	for (i=0; i<Holidays2.length; i+=2)
		if (Holidays2[i] == month) holidays[(Holidays2[i+1] - 1) * 7 + firstMonday] = 1;
		
	// 祝日3：独自の祝日設定(月,日)
	var Holidays3 = new Array();
	var firstSunday = (startDay == 0)? 1: 8 - startDay;
	for (i=0; i<Holidays3.length; i+=2) {
		if (Holidays3[i] == month) {
			holidays[Holidays3[i+1]] = 1;
		}
	}

	// 
	var workdays = new Array();
	for (var i=0; i<=dateMax; i++) workdays[i] = 0;
	
	// 営業日：休日で営業する日の設定(月,日)
	var Workdays1 = new Array();
	for (i=0; i<Workdays1.length; i+=2) {
		if (Workdays1[i] == month) {
			workdays[Workdays1[i+1]] = 1;
		}
	}	
	
	var days = new Array("日", "月", "火", "水", "木", "金", "土");
	
	document.write("<table class='business-calendar'>\n<tr class='bg1'><th colspan='7'>" + year + "年" + month + "月</th></tr>\n");
	document.write("<tr><th class='holiday sun'>" + days[0] + "</th>");
	for (i=1; i<6; i++) document.write("<th>" + days[i] + "</th>");
	document.write("<th class='thu'>" + days[6] + "</th></tr>\n");
	
	var col=0;
	if (startDay > 0) {
		document.write("<tr>");
		for ( ; col<startDay; col++) document.write("<td>&nbsp;</td>");
	}
	for (i=1; i<=dateMax; i++) {
		if (col == 0) document.write("<tr>");
		// 
		if (i == today) {
			if (holidays[i] == 1 || col == 0) s1 = "<td class='sun'>";
            // 木曜日(4)を休日に設定
			else if (col == 4) s1 = "<td class='thu'>";
			else s1 = "<td>";
		}
		else if (holidays[i] == 1 || col == 0) s1 = "<td class='holiday sun'>";
		else if (workdays[i] == 1) s1 = "<td class='workday'>";
        // 木曜日(4)を休日に設定
		else if (col == 4) s1 = "<td class='holiday thu'>";
		else s1 = "<td>";
		
		document.write(s1 + i + "</td>");
		if (col == 6) { document.write("</tr>\n"); col=0; } else col++;
	}
	if (col != 0) {
		for ( ; col<7; col++) document.write("<td>&nbsp;</td>");
		document.write("</tr>");
	}
	document.write("</table>");

}