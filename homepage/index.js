// event hadler for world icon
document.getElementById('world-icon').addEventListener('click', function (e) {
    console.log('object');
    document.getElementById('step-one').innerHTML = `
        <nav>
            <div class="step-one-icons">
            <img class="size" src="../images/worldicon.png" alt="">
            <img class="size" src="../images/customerBlack.png" alt="">
            <img class="size" src="../images/kpiblack.png" alt="">
            <img class="size" src="../images/graphblack.png" alt="">
            </div>
        </nav>

        <div class="flag-details">
           <div>
               
           </div>
           <div>
               <img class="flag" src="../images/flag.png" alt="">
           </div>
       </div>

    `
});




// event handlers for customer icon
document.getElementById('customer-icon').addEventListener('click', function (e) {
    console.log('object');
    document.getElementById('step-one').innerHTML = `
    <nav>
            <div class="step-one-icons">
                <img src="../images/worldicon.png" alt="">
            <img src="../images/customer.png" alt="">
            <img src="../images/kpiblack.png" alt="">
            <img src="../images/graphblack.png" alt="">
            </div>
        </nav>
    `
});




// event handler for kpi icon
document.getElementById('kpi-icon').addEventListener('click', function (e) {
    console.log('object');
    document.getElementById('step-one').innerHTML = `
    <nav>
            <div class="step-one-icons">
                <img src="../images/worldicon.png" alt="">
            <img src="../images/customerblack.png" alt="">
            <img src="../images/kpi.png" alt="">
            <img src="../images/graphblack.png" alt="">
            </div>
        </nav>
    `
});




// event handler for chart icon
document.getElementById('chart-icon').addEventListener('click', function (e) {
    console.log('object');
    document.getElementById('step-one').innerHTML = `
    <nav>
            <div class="step-one-icons">
                <img src="../images/worldicon.png" alt="">
            <img src="../images/customerblack.png" alt="">
            <img src="../images/kpiblack.png" alt="">
            <img src="../images/chart.png" alt="">
            </div>
        </nav>
    `
});