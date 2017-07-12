/**
 * Created by penguin on 2017-07-07.
 */
import AlbumService from "./album.service";
import albumListTmpl from "./templates/album-list.hbs";

class AlbumComponent {
    constructor(){
        this.albumService = new AlbumService();
        this.albumService.getAlbumList()
        .then(albumList=>this.render(albumList));
    }
    render(albumList){
        console.log(albumList);
        const tmpl = albumListTmpl({albumList});
        document.getElementById('album-list').innerHTML = tmpl;
    }
}

export default AlbumComponent;
