$(document).ready(function(){
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('autofiller') == 1) {

        var fid, elem, pof;

        fid = urlParams.get('fid') !== null ? (urlParams.get('fid').length > 0 ? ($(`#${urlParams.get('fid')}`).length > 0 ? $(`#${urlParams.get('fid')} input, #${urlParams.get('fid')} select`) : null) : null) : null;
        pof = urlParams.get('pof') !== null ? (urlParams.get('pof').length > 0 ? ($(`input[name="${urlParams.get('pof')}"]`).length > 0 ? $(`input[name="${urlParams.get('pof')}"]`).parents('form').attr('id') : null) : null) : null;
        ele = fid !== null ? fid : $(`#${pof} input, #${pof} select`);

        if (ele !== null) {
            if (urlParams.get('af') !== null) {
                ele.each(function() {
                    $(this).val(urlParams.get($(this).attr('name')));
                });
            } else {
                if (urlParams.get('eid') !== null && $(`#${urlParams.get('eid')}`).length > 0) {
                    $(`#${urlParams.get('eid')}`).on('click', function() {
                        ele.each(function() {
                            $(this).val(urlParams.get($(this).attr('name')));
                        })
                    });
                } else {
                    console.log('Erorr! No Event ID Click provided');
                }
            }
        } else {
            console.log('Invalid Selectors');
        }
    }
})
