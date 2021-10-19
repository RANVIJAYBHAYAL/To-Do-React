import {takeLatest, put , all,call} from "redux-saga/effects";
import { deleteToDoSaga,addToDoSaga,updateToDoSaga} from "../actions/todoActions";


export function* onAddToDoSaga(payload){
    yield put(addToDoSaga(payload));
}
export function* onDeleteToDoSaga({payload:{id}}){
    yield put(deleteToDoSaga(id));
}
export function* onUpdateToDoSaga(payload){
    yield put(updateToDoSaga(payload));
}

export function* onDelete(){
    yield takeLatest("DELETE_TODO",onDeleteToDoSaga);
}
export function* onAdd(){
    yield takeLatest("ADD_TODO",onAddToDoSaga);
}
export function* onUpdate(){
    yield takeLatest("UPDATE_TODO",onUpdateToDoSaga);
}
export function* todos(){
    yield all([call(onDelete),call(onAdd),call(onUpdate)]);
}