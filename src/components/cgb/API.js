import Config from '@/Config';

export default {
  URLs: {
    CSVParse: Config.APIServer.cafune + '/contract/cgb/csv-parse.api'
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
      var blob = new Blob([ev.target.result], {type: 'text/csv; charset=gbk'});
      var fd = new FormData();
      fd.set('data', blob);
      
      return fetch(
        this.URLs.CSVParse,
        {
          method: 'POST',
          body: fd,
          credentials: 'include'
        }
      );
    });

    return(p);
  }
}
