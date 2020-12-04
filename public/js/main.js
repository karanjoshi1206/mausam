const city_name = document.getElementById("city_name")
const city = document.getElementById("city")
const tempfinal = document.getElementById("tempfinal")
const temp_status = document.getElementById("temp_status")
const submitBtn = document.getElementById("submitBtn")
const data_hide = document.querySelector(".middle_layer")
const curdate = document.getElementById("date");
const day = document.getElementById("day");
const time = document.getElementById("time")
getinfo = async (event) => {
    event.preventDefault();
    let cityval = city.value;

    if (cityval === "") {
        city_name.innerText = ` Do write a city before search`
        data_hide.classList.add("data_hide")
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=f35001ee80a5fbb3ade6310931770aeb`
            const response = await fetch(url)
            const data = await response.json()
            const arrdata = [data]
            // console.log(arrdata)
            const acttempp = (arrdata[0].main.temp);
const acttemp = Math.floor(acttempp-273.15);
            tempfinal.innerText = acttemp;
            const temp_mood = arrdata[0].weather[0].main;
            if (temp_mood == "Clear") {
                temp_status.innerHTML = "<i class='fas fa-sun style='color: yellow;'></i>"
            }
            if (temp_mood == "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud style='color: white; '></i>"
            } if (temp_mood == "Rain") {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain style='color: blue;'></i>"
            } else {
                temp_mood.innerHTML = "<i class='fas fa-wind'></i>"
            }
            city_name.innerText = ` ${arrdata[0].name}, ${arrdata[0].sys.country}`;
            data_hide.classList.remove("data_hide")

        } catch (error) {
            city_name.innerText = ` Enter a valid city`
            data_hide.classList.add("data_hide")

        }

    }

}
submitBtn.addEventListener("click", getinfo)


const currentDay = () => {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    let currentTime = new Date();
    let day = weekday[currentTime.getDay()];
    return day;
}
const getcurrenttime = () => {
    var now = new Date;
    var hours = now.getHours();
    var mins = now.getMinutes();
    let periods = "AM";
    if (hours > 11) {
        periods = "PM";
        if (hours > 12) {
            hours -= 12;
        }
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    return `${hours} : ${mins} ${periods}`

}
const getcurrentdate = () => {
    var monthname = new Array(7);
    monthname[0] = "Jan";
    monthname[1] = "Feb";
    monthname[2] = "Mar";
    monthname[3] = "April";
    monthname[4] = "May";
    monthname[5] = "June";
    monthname[6] = "July";
    monthname[7] = "Aug";
    monthname[8] = "Sep";
    monthname[9] = "Oct";
    monthname[10] = "Nov";
    monthname[11] = "Dec";

    var now = new Date;
    var month = now.getMonth() + 1;
    var date = now.getUTCDate();
    var year = now.getFullYear();
    return `${month} / ${date} / ${year}`

}
curdate.innerHTML = getcurrentdate()
day.innerHTML = currentDay()
time.innerHTML = getcurrenttime()
