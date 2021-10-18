import {takeLatest, put , all,call} from "redux-saga/effects";
import { deleteToDoSaga } from "../actions/todoActions";

export function* onDeleteToDoSaga({payload:{id}}){
    yield put(deleteToDoSaga(id));
}


export function* onDelete(){
    yield takeLatest("DELETE_TODO",deleteToDoSaga);
}

export function* todos(){
    yield all(call(onDelete));
}