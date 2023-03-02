let array=[1,2,3,4,56,6,33,67,9];
count=0;
result=0;
function odd(array){
	
	for(i=0; i<array.length; i++){
	if(array[i]%2==0)
	{
		document.write(array[i]+"-Even number-" + count);
		count++;
		document.write('<br>');
	}
	else{
		document.write(array[i]+"-Odd number-" + result);
		result++;
		document.write('<br>');
	}
}
	return count, result;
}	
document.write(odd(array));
