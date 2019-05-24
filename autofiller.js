(function() {
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('autofiller') == 1) {

        var fid, elem, pof;

        fid = urlParams.get('fid') !== null ? (urlParams.get('fid').length > 0 ? (document.getElementById(`${urlParams.get('fid')}`).length > 0 ? document.querySelectorAll(`#${urlParams.get('fid')} input`) : null) : null) : null;
        pof = urlParams.get('pof') !== null ? (urlParams.get('pof').length > 0 ? (document.getElementsByName(`${urlParams.get('pof')}`).length > 0 ? document.querySelector(`input[name="${urlParams.get('pof')}"]`).form : null) : null) : null;
        ele = fid !== null ? fid : document.querySelectorAll(`#${pof.getAttribute("id")} input`);

        if (ele !== null) {
            if (urlParams.get('af') !== null) {
                ele.forEach(function(element) {
                    element.value = urlParams.get(element.getAttribute("name"));
                })
            } else {
                if (urlParams.get('eid') !== null && document.getElementById(`${urlParams.get('eid')}`).length > 0) {
                    document.getElementById(`${urlParams.get('eid')}`).onclick = function() {
                        ele.forEach(function(element) {
                            element.value = urlParams.get(element.getAttribute("name"));
                        })
                    };
                } else {
                    console.log('Erorr! No Event ID Click provided');
                }
            }
        } else {
            console.log('Invalid Selectors');
        }
    }
}