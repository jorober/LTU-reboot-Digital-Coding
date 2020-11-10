var temperature = 51;

/*
if (temperature < 50 ){
    document.write('Temperature is below 50 DO NOT EXIT!!!')
}
else {if (temperature < 30 )
    document.write('Temperature is below 30!!! FEAR OF DEATH')
}
else {if (temperature < 0 )
    document.write('Temperature is below 30!!! FEAR OF DEATH')
}

else (temperature < 0 ){
    document.write('Temperature is below 0!!! IMMEDIATE DEATH')
} else {
    document.write('temp is fine dude')
}*/



if (temperature < 0){
    document.write('Temperature is below 0!!! IMMEDIATE DEATH')
}
else if (temperature < 30){
    document.write('Temperature is below 30!!! FEAR OF DEATH')
}
else if (temperature <50) {
    document.write('Temperature is below 50 DO NOT EXIT!!!')
}
else {document.write('temp is fine dude, head out')}