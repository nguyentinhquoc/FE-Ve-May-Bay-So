
    function changeSelectedFlight(w) {
        let contenFlight;
        if (w == 0) {
            contenFlight = document.querySelectorAll('.list-ticket-items-out .plane-items');
            document.getElementById('out-bound-info').style.display = '';
            document.getElementById('title-outbound').style.display = '';
            document.getElementById('chang-date-outbound').style.display = '';
        }
        else {
            contenFlight = document.querySelectorAll('.list-ticket-items-in .plane-items');
            document.getElementById('in-bound-info').style.display = '';
            document.getElementById('title-inbound').style.display = '';
            document.getElementById('chang-date-inbound').style.display = '';
        }

        contenFlight.forEach(item => {
            item.classList.remove('selected-flight');
            item.style.display = '';
        });
    }
