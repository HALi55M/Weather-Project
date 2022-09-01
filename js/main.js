let input_search = document.getElementById("ser")
var myHttp = new XMLHttpRequest();
var dataList = []
myHttp.open("GET", "http://api.weatherapi.com/v1/forecast.json?key=059ef326750044acb2a15032223005&days=3&q=Cairo")
myHttp.send();
myHttp.addEventListener("readystatechange", function () {
    if (myHttp.readyState == 4 && myHttp.status == 200) {
        dataList = JSON.parse(myHttp.response);
        display(dataList)
        console.log(dataList)
    }
})

function display(x) {
    let current = x.current
    let location = x.location
    let days = x.forecast.forecastday
    const DayDate1 = new Date(`${days[0].date}`);
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    let DayMonth = month[d.getMonth()];
    var weekday = new Array(7);
    weekday[0] = "Monday";
    weekday[1] = "Tuesday";
    weekday[2] = "Wednesday";
    weekday[3] = "Thursday";
    weekday[4] = "Friday";
    weekday[5] = "Saturday";
    weekday[6] = "Sunday";
    const dday1 = new Date(`${days[0].date}`);
    let day1 = dday1.getDay()
    const dday2 = new Date(`${days[1].date}`);
    let day2 = dday2.getDay()
    const dday3 = new Date(`${days[2].date}`);
    let day3 = dday3.getDay()
    // console.log(days)
    let temp = ""
    temp = `
    
<div class="col-md-4">
    <div class="box">
        <div class="head-box d-flex">
            <div class="day">
            ${weekday[day1 - 1]}
            </div>
            <div class="data">
            ${DayDate1.getDate()}${DayMonth}
            </div>
        </div>
        <div class="box-content">
            <div class="info">
            <img src="${current.condition.icon}" alt="">
                <p class="degree-today">
                    ${current.temp_c}<span>&#8451;</span>
                </p>
                <p class="location"> ${location.name}</p>
            </div>
            <p class="tempr px-3"> ${current.condition.text}</p>
            <div class="icons">
                <ul class="list-unstyled d-flex justify-content-around">
                    <li><img src="images/icon-umberella.png" alt=""> ${Math.floor(current.pressure_in)}%</li>
                    <li><img src="images/icon-wind.png" alt=""> ${Math.floor(current.vis_km)}km/h</li>
                    <li><img src="images/icon-compass.png" alt=""> ${current.wind_dir}</li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div class="col-md-4">
    <div class="box position-relative">
        <div class="head-box text-center">
            <div class="day">
            ${weekday[day2 - 1]}
            </div>
        </div>
        <div class="info position text-center">
        <img src="${days[1].day.condition.icon}" alt="">
        </div>
        <div class="content py-2">
            <p class="degree-today">
                ${days[1].day.maxtemp_c}<span>&#8451;</span>
            </p>
            <p class="sec-degree">
            ${days[1].day.mintemp_c}<span>&#8451;</span>
            </p>
            <p class="tempr px-3"> ${days[1].day.condition.text}</p>
        </div>
    </div>
</div>

<div class="col-md-4">
    <div class="box position-relative">
        <div class="head-box text-center">
            <div class="day">
            ${weekday[day3 - 1]}
            </div>
        </div>
        <div class="info position text-center">
        <img src="${days[2].day.condition.icon}" alt="">
        </div>
        <div class="content py-2">
            <p class="degree-today">
                ${days[2].day.maxtemp_c}<span>&#8451;</span>
            </p>
            <p class="sec-degree">
            ${days[2].day.mintemp_c}<span>&#8451;</span>
            </p>
            <p class="tempr px-3"> ${days[2].day.condition.text}</p>
        </div>
    </div>
</div>`
    document.getElementById("myData").innerHTML = temp
}

function search() {
    let serValue = input_search.value
    myHttp.open("GET", `http://api.weatherapi.com/v1/forecast.json?key=059ef326750044acb2a15032223005&days=3&q=${serValue}`)
    myHttp.send()
}
