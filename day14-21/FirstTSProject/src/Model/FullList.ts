import ListItem from "./ListItem";

interface List{
    list:ListItem[];
    load():void;
    save():void;
    clearList():void;
    addItemList(item:ListItem):void;
    removeItem(id:string):void;
}

export default class FullList implements List{
    

    constructor(
        private _list:ListItem[] = []
    ){}

    get list():ListItem[]{
        return this._list;
    }
    // set list(_list:ListItem[]){
    //     this._list = _list;
    // }

    load(){

    }

    save(): void {
        var stringList = this._list.toLocaleString();
        localStorage.setItem('fullList', stringList);
    }

    clearList(): void {
        localStorage.setItem('fullList', []);
    }

    addItemList(item: ListItem): void {
        let stringList = localStorage.getItem('fullList');
        if(stringList?.length == 0){
            return
        }
        var list = JSON.parse(stringList!);
        list.
    }


}