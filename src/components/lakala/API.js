import Config from '@/Config';
import PR from 'promise-request';

export default {
  URLs: {
    CSVParse: Config.APIServer.cafune + '/lakala/csv-parse.api'
  },
  /** Invoking CSVParse API.
   * @return {Promise} 
   */
  CSVParse: function (file) {
    var fr = new FileReader();
    var p = new Promise( (resolve, reject) => {
      fr.onloadend = resolve;
      fr.onerror = reject;
      fr.readAsArrayBuffer(file);
    }).then( (ev) => {
      var blob = ev.target.result;
      blob.type = 'text/csv; charset=gbk';

      var fd = new FormData();
      fd.set('data', blob);

      return PR.post({
        url: this.URLs.CSVParse,
        formData: fd
      });
    });

    return(p);
  }
}
