function calculate() {
    setInterval(() => {
        // Input Birthdate //
        let birthdate = new Date(document.getElementById('birthdate').value);

        // getTime : new Date //
        let now = new Date();
        let ageInMs = now.getTime() - birthdate.getTime();

        let ageInS = ageInMs / 1000; // to seconds //
        let ageInMins = ageInS / 60; // to minutes //
        let ageInHrs = ageInMins / 60; // to Hours //
        let ageInDays = ageInHrs / 24; // to days //
        let ageInMonths = ageInDays / 30.4375; // to months //
        let ageInYears = ageInMonths / 12; // to years //
        
    })
}