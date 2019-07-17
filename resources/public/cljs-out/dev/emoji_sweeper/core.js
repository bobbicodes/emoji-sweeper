// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('emoji_sweeper.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('clojure.set');
emoji_sweeper.core.multiply = (function emoji_sweeper$core$multiply(a,b){
return (a * b);
});
emoji_sweeper.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$width,(24),cljs.core.cst$kw$height,(18),cljs.core.cst$kw$percent_DASH_mines,(20),cljs.core.cst$kw$cells,cljs.core.set((function (){var iter__4324__auto__ = (function emoji_sweeper$core$iter__10408(s__10409){
return (new cljs.core.LazySeq(null,(function (){
var s__10409__$1 = s__10409;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10409__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first(xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__10409__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function emoji_sweeper$core$iter__10408_$_iter__10410(s__10411){
return (new cljs.core.LazySeq(null,((function (s__10409__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__10411__$1 = s__10411;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__10411__$1);
if(temp__5457__auto____$1){
var s__10411__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10411__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10411__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10413 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10412 = (0);
while(true){
if((i__10412 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10412);
cljs.core.chunk_append(b__10413,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__10414 = (i__10412 + (1));
i__10412 = G__10414;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10413),emoji_sweeper$core$iter__10408_$_iter__10410(cljs.core.chunk_rest(s__10411__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10413),null);
}
} else {
var y = cljs.core.first(s__10411__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),emoji_sweeper$core$iter__10408_$_iter__10410(cljs.core.rest(s__10411__$2)));
}
} else {
return null;
}
break;
}
});})(s__10409__$1,x,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__10409__$1,x,xs__6012__auto__,temp__5457__auto__))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((18))));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,emoji_sweeper$core$iter__10408(cljs.core.rest(s__10409__$1)));
} else {
var G__10415 = cljs.core.rest(s__10409__$1);
s__10409__$1 = G__10415;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((24)));
})()),cljs.core.cst$kw$mines,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$cleared,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$mouse_DASH_down_QMARK_,false,cljs.core.cst$kw$flagged,cljs.core.PersistentHashSet.EMPTY], null));
emoji_sweeper.core.percent_mines = reagent.core.cursor(emoji_sweeper.core.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$percent_DASH_mines], null));
emoji_sweeper.core.width = reagent.core.cursor(emoji_sweeper.core.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$width], null));
emoji_sweeper.core.height = reagent.core.cursor(emoji_sweeper.core.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$height], null));
emoji_sweeper.core.cells = reagent.core.cursor(emoji_sweeper.core.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cells], null));
emoji_sweeper.core.cleared = reagent.core.cursor(emoji_sweeper.core.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cleared], null));
emoji_sweeper.core.mines = reagent.core.cursor(emoji_sweeper.core.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mines], null));
emoji_sweeper.core.flagged = reagent.core.cursor(emoji_sweeper.core.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flagged], null));
emoji_sweeper.core.new_board_BANG_ = (function emoji_sweeper$core$new_board_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(emoji_sweeper.core.app_state,cljs.core.assoc,cljs.core.cst$kw$cells,cljs.core.set((function (){var iter__4324__auto__ = (function emoji_sweeper$core$new_board_BANG__$_iter__10416(s__10417){
return (new cljs.core.LazySeq(null,(function (){
var s__10417__$1 = s__10417;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10417__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first(xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__10417__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function emoji_sweeper$core$new_board_BANG__$_iter__10416_$_iter__10418(s__10419){
return (new cljs.core.LazySeq(null,((function (s__10417__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__10419__$1 = s__10419;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__10419__$1);
if(temp__5457__auto____$1){
var s__10419__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10419__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10419__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10421 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10420 = (0);
while(true){
if((i__10420 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10420);
cljs.core.chunk_append(b__10421,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__10422 = (i__10420 + (1));
i__10420 = G__10422;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10421),emoji_sweeper$core$new_board_BANG__$_iter__10416_$_iter__10418(cljs.core.chunk_rest(s__10419__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10421),null);
}
} else {
var y = cljs.core.first(s__10419__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),emoji_sweeper$core$new_board_BANG__$_iter__10416_$_iter__10418(cljs.core.rest(s__10419__$2)));
}
} else {
return null;
}
break;
}
});})(s__10417__$1,x,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__10417__$1,x,xs__6012__auto__,temp__5457__auto__))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(emoji_sweeper.core.height))));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,emoji_sweeper$core$new_board_BANG__$_iter__10416(cljs.core.rest(s__10417__$1)));
} else {
var G__10423 = cljs.core.rest(s__10417__$1);
s__10417__$1 = G__10423;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(emoji_sweeper.core.width)));
})()));

cljs.core.reset_BANG_(emoji_sweeper.core.mines,cljs.core.PersistentHashSet.EMPTY);

cljs.core.reset_BANG_(emoji_sweeper.core.cleared,cljs.core.PersistentHashSet.EMPTY);

return cljs.core.reset_BANG_(emoji_sweeper.core.flagged,cljs.core.PersistentHashSet.EMPTY);
});
emoji_sweeper.core.number_input = (function emoji_sweeper$core$number_input(label,value,on_change){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"6%",cljs.core.cst$kw$background_DASH_color,"lightgray"], null),cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,value,cljs.core.cst$kw$on_DASH_change,on_change], null)], null)], null);
});
emoji_sweeper.core.height_input = (function emoji_sweeper$core$height_input(){
return emoji_sweeper.core.number_input("Height: ",cljs.core.deref(emoji_sweeper.core.height),(function (e){
cljs.core.reset_BANG_(emoji_sweeper.core.height,e.target.value);

return emoji_sweeper.core.new_board_BANG_();
}));
});
emoji_sweeper.core.width_input = (function emoji_sweeper$core$width_input(){
return emoji_sweeper.core.number_input(" Width: ",cljs.core.deref(emoji_sweeper.core.width),(function (e){
cljs.core.reset_BANG_(emoji_sweeper.core.width,e.target.value);

return emoji_sweeper.core.new_board_BANG_();
}));
});
emoji_sweeper.core.mines_input = (function emoji_sweeper$core$mines_input(){
return emoji_sweeper.core.number_input(" % mines: ",cljs.core.deref(emoji_sweeper.core.percent_mines),(function (e){
cljs.core.reset_BANG_(emoji_sweeper.core.percent_mines,parseInt(e.target.value));

return emoji_sweeper.core.new_board_BANG_();
}));
});
emoji_sweeper.core.set_mines = (function emoji_sweeper$core$set_mines(p__10424){
var vec__10425 = p__10424;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10425,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10425,(1),null);
return cljs.core.set(cljs.core.take.cljs$core$IFn$_invoke$arity$2(((cljs.core.deref(emoji_sweeper.core.percent_mines) / (100)) * (cljs.core.deref(emoji_sweeper.core.height) * cljs.core.deref(emoji_sweeper.core.width))),cljs.core.shuffle(cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(emoji_sweeper.core.cells),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))));
});
emoji_sweeper.core.neighbors = (function emoji_sweeper$core$neighbors(p__10429){
var vec__10430 = p__10429;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10430,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10430,(1),null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__10430,x,y){
return (function (p1__10428_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.deref(emoji_sweeper.core.cells),p1__10428_SHARP_);
});})(vec__10430,x,y))
,(function (){var iter__4324__auto__ = ((function (vec__10430,x,y){
return (function emoji_sweeper$core$neighbors_$_iter__10433(s__10434){
return (new cljs.core.LazySeq(null,((function (vec__10430,x,y){
return (function (){
var s__10434__$1 = s__10434;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10434__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var dx = cljs.core.first(xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__10434__$1,dx,xs__6012__auto__,temp__5457__auto__,vec__10430,x,y){
return (function emoji_sweeper$core$neighbors_$_iter__10433_$_iter__10435(s__10436){
return (new cljs.core.LazySeq(null,((function (s__10434__$1,dx,xs__6012__auto__,temp__5457__auto__,vec__10430,x,y){
return (function (){
var s__10436__$1 = s__10436;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__10436__$1);
if(temp__5457__auto____$1){
var s__10436__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10436__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10436__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10438 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10437 = (0);
while(true){
if((i__10437 < size__4323__auto__)){
var dy = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10437);
cljs.core.chunk_append(b__10438,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + dx),(y + dy)], null));

var G__10439 = (i__10437 + (1));
i__10437 = G__10439;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10438),emoji_sweeper$core$neighbors_$_iter__10433_$_iter__10435(cljs.core.chunk_rest(s__10436__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10438),null);
}
} else {
var dy = cljs.core.first(s__10436__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + dx),(y + dy)], null),emoji_sweeper$core$neighbors_$_iter__10433_$_iter__10435(cljs.core.rest(s__10436__$2)));
}
} else {
return null;
}
break;
}
});})(s__10434__$1,dx,xs__6012__auto__,temp__5457__auto__,vec__10430,x,y))
,null,null));
});})(s__10434__$1,dx,xs__6012__auto__,temp__5457__auto__,vec__10430,x,y))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,emoji_sweeper$core$neighbors_$_iter__10433(cljs.core.rest(s__10434__$1)));
} else {
var G__10440 = cljs.core.rest(s__10434__$1);
s__10434__$1 = G__10440;
continue;
}
} else {
return null;
}
break;
}
});})(vec__10430,x,y))
,null,null));
});})(vec__10430,x,y))
;
return iter__4324__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null));
})());
});
emoji_sweeper.core.mine_count = (function emoji_sweeper$core$mine_count(p__10441){
var vec__10442 = p__10441;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10442,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10442,(1),null);
if(cljs.core.contains_QMARK_(cljs.core.deref(emoji_sweeper.core.mines),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))){
return (1);
} else {
return (0);
}
});
emoji_sweeper.core.mine_detector = (function emoji_sweeper$core$mine_detector(p__10445){
var vec__10446 = p__10445;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10446,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10446,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$1(emoji_sweeper.core.mine_count),emoji_sweeper.core.neighbors(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))));
});
emoji_sweeper.core.step = (function emoji_sweeper$core$step(state,p__10450){
var vec__10451 = p__10450;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10451,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10451,(1),null);
if(cljs.core.contains_QMARK_(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))){
return state;
} else {
if(((cljs.core.contains_QMARK_(cljs.core.deref(emoji_sweeper.core.mines),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))) || (((0) < emoji_sweeper.core.mine_detector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(emoji_sweeper.core.step,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__10451,x,y){
return (function (p1__10449_SHARP_){
return !(cljs.core.contains_QMARK_(state,p1__10449_SHARP_));
});})(vec__10451,x,y))
,emoji_sweeper.core.neighbors(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))));

}
}
});
emoji_sweeper.core.game_status = (function emoji_sweeper$core$game_status(){
if(cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(emoji_sweeper.core.cleared),cljs.core.deref(emoji_sweeper.core.mines)))){
return cljs.core.cst$kw$dead;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(emoji_sweeper.core.cells),clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(emoji_sweeper.core.cleared),cljs.core.deref(emoji_sweeper.core.mines)))){
return cljs.core.cst$kw$win;
} else {
if(cljs.core.seq(cljs.core.deref(emoji_sweeper.core.cleared))){
return cljs.core.cst$kw$in_DASH_progress;
} else {
return cljs.core.cst$kw$new;

}
}
}
});
emoji_sweeper.core.icon = (function emoji_sweeper$core$icon(){
var G__10454 = emoji_sweeper.core.game_status();
var G__10454__$1 = (((G__10454 instanceof cljs.core.Keyword))?G__10454.fqn:null);
switch (G__10454__$1) {
case "dead":
return "\uD83E\uDD2F";

break;
case "win":
return "\uD83E\uDD13";

break;
default:
if(cljs.core.truth_(cljs.core.cst$kw$mouse_DASH_down_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(emoji_sweeper.core.app_state)))){
return "\uD83D\uDE2C";
} else {
return "\uD83E\uDD7A";
}

}
});
emoji_sweeper.core.step_BANG_ = (function emoji_sweeper$core$step_BANG_(p__10456){
var vec__10457 = p__10456;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10457,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10457,(1),null);
if(cljs.core.contains_QMARK_(cljs.core.deref(emoji_sweeper.core.flagged),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))){
return null;
} else {
return cljs.core.reset_BANG_(emoji_sweeper.core.cleared,emoji_sweeper.core.step(cljs.core.deref(emoji_sweeper.core.cleared),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
}
});
emoji_sweeper.core.flag_BANG_ = (function emoji_sweeper$core$flag_BANG_(p__10460){
var vec__10461 = p__10460;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10461,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10461,(1),null);
if(cljs.core.contains_QMARK_(cljs.core.deref(emoji_sweeper.core.cleared),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(emoji_sweeper.core.flagged,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
}
});
emoji_sweeper.core.unflag_BANG_ = (function emoji_sweeper$core$unflag_BANG_(p__10464){
var vec__10465 = p__10464;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10465,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10465,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(emoji_sweeper.core.flagged,cljs.core.disj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
emoji_sweeper.core.covered_cell = (function emoji_sweeper$core$covered_cell(p__10468){
var vec__10469 = p__10468;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10469,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10469,(1),null);
var focused_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (focused_QMARK_,vec__10469,x,y){
return (function (p__10472){
var vec__10473 = p__10472;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10473,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10473,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$stroke,cljs.core.cst$kw$on_DASH_contextMenu,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_mouse_DASH_down,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$on_DASH_mouse_DASH_up,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$height],[-0.9,"black",((function (vec__10473,x__$1,y__$1,focused_QMARK_,vec__10469,x,y){
return (function (e){
e.preventDefault();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(emoji_sweeper.core.app_state,cljs.core.assoc,cljs.core.cst$kw$mouse_DASH_down_QMARK_,false);

if(cljs.core.contains_QMARK_(cljs.core.deref(emoji_sweeper.core.flagged),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null))){
return emoji_sweeper.core.unflag_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null));
} else {
return emoji_sweeper.core.flag_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null));
}
});})(vec__10473,x__$1,y__$1,focused_QMARK_,vec__10469,x,y))
,((function (vec__10473,x__$1,y__$1,focused_QMARK_,vec__10469,x,y){
return (function (){
return cljs.core.reset_BANG_(focused_QMARK_,false);
});})(vec__10473,x__$1,y__$1,focused_QMARK_,vec__10469,x,y))
,(cljs.core.truth_(cljs.core.deref(focused_QMARK_))?"darkgrey":"silver"),1.85,((function (vec__10473,x__$1,y__$1,focused_QMARK_,vec__10469,x,y){
return (function (){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emoji_sweeper.core.game_status(),cljs.core.cst$kw$dead))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(emoji_sweeper.core.app_state,cljs.core.assoc,cljs.core.cst$kw$mouse_DASH_down_QMARK_,true);
} else {
return null;
}
});})(vec__10473,x__$1,y__$1,focused_QMARK_,vec__10469,x,y))
,((function (vec__10473,x__$1,y__$1,focused_QMARK_,vec__10469,x,y){
return (function (e){
if(((cljs.core.contains_QMARK_(cljs.core.deref(emoji_sweeper.core.flagged),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emoji_sweeper.core.game_status(),cljs.core.cst$kw$dead)))){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emoji_sweeper.core.game_status(),cljs.core.cst$kw$new)){
cljs.core.reset_BANG_(emoji_sweeper.core.mines,emoji_sweeper.core.set_mines(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null)));
} else {
}

return emoji_sweeper.core.step_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null));
}
});})(vec__10473,x__$1,y__$1,focused_QMARK_,vec__10469,x,y))
,(cljs.core.truth_(cljs.core.deref(focused_QMARK_))?0.1:0.08),((function (vec__10473,x__$1,y__$1,focused_QMARK_,vec__10469,x,y){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(emoji_sweeper.core.app_state,cljs.core.assoc,cljs.core.cst$kw$mouse_DASH_down_QMARK_,false);
});})(vec__10473,x__$1,y__$1,focused_QMARK_,vec__10469,x,y))
,((function (vec__10473,x__$1,y__$1,focused_QMARK_,vec__10469,x,y){
return (function (){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emoji_sweeper.core.game_status(),cljs.core.cst$kw$dead))){
return cljs.core.reset_BANG_(focused_QMARK_,true);
} else {
return null;
}
});})(vec__10473,x__$1,y__$1,focused_QMARK_,vec__10469,x,y))
,-0.9,1.85])], null);
});
;})(focused_QMARK_,vec__10469,x,y))
});
emoji_sweeper.core.cleared_cell = (function emoji_sweeper$core$cleared_cell(p__10476){
var vec__10477 = p__10476;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10477,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10477,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$width,1.85,cljs.core.cst$kw$height,1.85,cljs.core.cst$kw$x,-0.9,cljs.core.cst$kw$y,-0.9,cljs.core.cst$kw$stroke_DASH_width,0.08,cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$fill,"white",cljs.core.cst$kw$on_DASH_contextMenu,((function (vec__10477,x,y){
return (function (e){
e.preventDefault();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(emoji_sweeper.core.app_state,cljs.core.assoc,cljs.core.cst$kw$mouse_DASH_down_QMARK_,false);

return cljs.core.run_BANG_(emoji_sweeper.core.step_BANG_,emoji_sweeper.core.neighbors(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
});})(vec__10477,x,y))
], null)], null);
});
emoji_sweeper.core.flag = (function emoji_sweeper$core$flag(p__10481){
var vec__10482 = p__10481;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10482,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10482,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$y,0.5,cljs.core.cst$kw$text_DASH_anchor,"middle",cljs.core.cst$kw$font_DASH_weight,"600",cljs.core.cst$kw$fill,"red",cljs.core.cst$kw$font_DASH_size,"1.5",cljs.core.cst$kw$on_DASH_contextMenu,((function (vec__10482,x,y){
return (function (p1__10480_SHARP_){
p1__10480_SHARP_.preventDefault();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(emoji_sweeper.core.app_state,cljs.core.assoc,cljs.core.cst$kw$mouse_DASH_down_QMARK_,false);

if(cljs.core.contains_QMARK_(cljs.core.deref(emoji_sweeper.core.flagged),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))){
return emoji_sweeper.core.unflag_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
} else {
return null;
}
});})(vec__10482,x,y))
], null),"\u2620\uFE0F"], null);
});
emoji_sweeper.core.bomb = (function emoji_sweeper$core$bomb(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$y,0.5,cljs.core.cst$kw$text_DASH_anchor,"middle",cljs.core.cst$kw$font_DASH_size,"1.5"], null),"\uD83D\uDCA5"], null);
});
emoji_sweeper.core.mine_num = (function emoji_sweeper$core$mine_num(p__10486){
var vec__10487 = p__10486;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10487,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10487,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$y,0.5,cljs.core.cst$kw$text_DASH_anchor,"middle",cljs.core.cst$kw$font_DASH_weight,"900",cljs.core.cst$kw$fill,(function (){var G__10490 = emoji_sweeper.core.mine_detector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
switch (G__10490) {
case (1):
return "blue";

break;
case (2):
return "green";

break;
case (3):
return "red";

break;
case (4):
return "purple";

break;
case (5):
return "brown";

break;
default:
return "black";

}
})(),cljs.core.cst$kw$font_DASH_size,"1.25",cljs.core.cst$kw$on_DASH_mouse_DASH_down,((function (vec__10487,x,y){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(emoji_sweeper.core.app_state,cljs.core.assoc,cljs.core.cst$kw$mouse_DASH_down_QMARK_,true);

return setTimeout(((function (vec__10487,x,y){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(emoji_sweeper.core.app_state,cljs.core.assoc,cljs.core.cst$kw$mouse_DASH_down_QMARK_,false);
});})(vec__10487,x,y))
,(800));
});})(vec__10487,x,y))
,cljs.core.cst$kw$on_DASH_contextMenu,((function (vec__10487,x,y){
return (function (p1__10485_SHARP_){
p1__10485_SHARP_.preventDefault();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(emoji_sweeper.core.app_state,cljs.core.assoc,cljs.core.cst$kw$mouse_DASH_down_QMARK_,false);

if(cljs.core.contains_QMARK_(cljs.core.deref(emoji_sweeper.core.cleared),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))){
return cljs.core.run_BANG_(emoji_sweeper.core.step_BANG_,emoji_sweeper.core.neighbors(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
} else {
if(cljs.core.contains_QMARK_(cljs.core.deref(emoji_sweeper.core.flagged),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))){
return emoji_sweeper.core.unflag_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
} else {
return null;
}
}
});})(vec__10487,x,y))
], null),emoji_sweeper.core.mine_detector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))], null);
});
emoji_sweeper.core.render_board = (function emoji_sweeper$core$render_board(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$view_DASH_box,["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(emoji_sweeper.core.app_state)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(emoji_sweeper.core.app_state)))].join(''),cljs.core.cst$kw$shape_DASH_rendering,"auto",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_height,"500px"], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = (function emoji_sweeper$core$render_board_$_iter__10492(s__10493){
return (new cljs.core.LazySeq(null,(function (){
var s__10493__$1 = s__10493;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10493__$1);
if(temp__5457__auto__){
var s__10493__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10493__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10493__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10495 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10494 = (0);
while(true){
if((i__10494 < size__4323__auto__)){
var vec__10496 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10494);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10496,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10496,(1),null);
cljs.core.chunk_append(b__10495,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),") ","scale (0.5)","translate(1,1)"].join('')], null),((cljs.core.contains_QMARK_(cljs.core.deref(emoji_sweeper.core.cleared),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emoji_sweeper.core.cleared_cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null):null),((((0) < emoji_sweeper.core.mine_detector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emoji_sweeper.core.mine_num,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null):null),((cljs.core.contains_QMARK_(cljs.core.deref(emoji_sweeper.core.mines),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emoji_sweeper.core.bomb], null):null),((cljs.core.contains_QMARK_(cljs.core.deref(emoji_sweeper.core.cleared),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emoji_sweeper.core.covered_cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),((cljs.core.contains_QMARK_(cljs.core.deref(emoji_sweeper.core.flagged),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emoji_sweeper.core.flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__10502 = (i__10494 + (1));
i__10494 = G__10502;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10495),emoji_sweeper$core$render_board_$_iter__10492(cljs.core.chunk_rest(s__10493__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10495),null);
}
} else {
var vec__10499 = cljs.core.first(s__10493__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10499,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10499,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),") ","scale (0.5)","translate(1,1)"].join('')], null),((cljs.core.contains_QMARK_(cljs.core.deref(emoji_sweeper.core.cleared),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emoji_sweeper.core.cleared_cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null):null),((((0) < emoji_sweeper.core.mine_detector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emoji_sweeper.core.mine_num,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null):null),((cljs.core.contains_QMARK_(cljs.core.deref(emoji_sweeper.core.mines),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emoji_sweeper.core.bomb], null):null),((cljs.core.contains_QMARK_(cljs.core.deref(emoji_sweeper.core.cleared),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emoji_sweeper.core.covered_cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),((cljs.core.contains_QMARK_(cljs.core.deref(emoji_sweeper.core.flagged),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emoji_sweeper.core.flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),emoji_sweeper$core$render_board_$_iter__10492(cljs.core.rest(s__10493__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.deref(emoji_sweeper.core.cells));
})())], null);
});
emoji_sweeper.core.minesweeper = (function emoji_sweeper$core$minesweeper(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$center,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"14px"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emoji_sweeper.core.height_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emoji_sweeper.core.width_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emoji_sweeper.core.mines_input], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"75px"], null),cljs.core.cst$kw$on_DASH_click,(function (){
return emoji_sweeper.core.new_board_BANG_();
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emoji_sweeper.core.icon], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emoji_sweeper.core.render_board], null)], null);
});
emoji_sweeper.core.get_app_element = (function emoji_sweeper$core$get_app_element(){
return goog.dom.getElement("app");
});
emoji_sweeper.core.mount = (function emoji_sweeper$core$mount(el){
var G__10503 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emoji_sweeper.core.minesweeper], null);
var G__10504 = el;
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__10503,G__10504) : reagent.core.render_component.call(null,G__10503,G__10504));
});
emoji_sweeper.core.mount_app_element = (function emoji_sweeper$core$mount_app_element(){
var temp__5457__auto__ = emoji_sweeper.core.get_app_element();
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return emoji_sweeper.core.mount(el);
} else {
return null;
}
});
emoji_sweeper.core.mount_app_element();
emoji_sweeper.core.on_reload = (function emoji_sweeper$core$on_reload(){
return emoji_sweeper.core.mount_app_element();
});
