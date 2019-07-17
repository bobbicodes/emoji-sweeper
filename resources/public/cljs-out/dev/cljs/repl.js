// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__14694){
var map__14695 = p__14694;
var map__14695__$1 = ((((!((map__14695 == null)))?(((((map__14695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14695):map__14695);
var m = map__14695__$1;
var n = cljs.core.get.call(null,map__14695__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__14695__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__14697_14719 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14698_14720 = null;
var count__14699_14721 = (0);
var i__14700_14722 = (0);
while(true){
if((i__14700_14722 < count__14699_14721)){
var f_14723 = cljs.core._nth.call(null,chunk__14698_14720,i__14700_14722);
cljs.core.println.call(null,"  ",f_14723);


var G__14724 = seq__14697_14719;
var G__14725 = chunk__14698_14720;
var G__14726 = count__14699_14721;
var G__14727 = (i__14700_14722 + (1));
seq__14697_14719 = G__14724;
chunk__14698_14720 = G__14725;
count__14699_14721 = G__14726;
i__14700_14722 = G__14727;
continue;
} else {
var temp__5457__auto___14728 = cljs.core.seq.call(null,seq__14697_14719);
if(temp__5457__auto___14728){
var seq__14697_14729__$1 = temp__5457__auto___14728;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14697_14729__$1)){
var c__4351__auto___14730 = cljs.core.chunk_first.call(null,seq__14697_14729__$1);
var G__14731 = cljs.core.chunk_rest.call(null,seq__14697_14729__$1);
var G__14732 = c__4351__auto___14730;
var G__14733 = cljs.core.count.call(null,c__4351__auto___14730);
var G__14734 = (0);
seq__14697_14719 = G__14731;
chunk__14698_14720 = G__14732;
count__14699_14721 = G__14733;
i__14700_14722 = G__14734;
continue;
} else {
var f_14735 = cljs.core.first.call(null,seq__14697_14729__$1);
cljs.core.println.call(null,"  ",f_14735);


var G__14736 = cljs.core.next.call(null,seq__14697_14729__$1);
var G__14737 = null;
var G__14738 = (0);
var G__14739 = (0);
seq__14697_14719 = G__14736;
chunk__14698_14720 = G__14737;
count__14699_14721 = G__14738;
i__14700_14722 = G__14739;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_14740 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_14740);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_14740)))?cljs.core.second.call(null,arglists_14740):arglists_14740));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__14701_14741 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14702_14742 = null;
var count__14703_14743 = (0);
var i__14704_14744 = (0);
while(true){
if((i__14704_14744 < count__14703_14743)){
var vec__14705_14745 = cljs.core._nth.call(null,chunk__14702_14742,i__14704_14744);
var name_14746 = cljs.core.nth.call(null,vec__14705_14745,(0),null);
var map__14708_14747 = cljs.core.nth.call(null,vec__14705_14745,(1),null);
var map__14708_14748__$1 = ((((!((map__14708_14747 == null)))?(((((map__14708_14747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14708_14747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14708_14747):map__14708_14747);
var doc_14749 = cljs.core.get.call(null,map__14708_14748__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14750 = cljs.core.get.call(null,map__14708_14748__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_14746);

cljs.core.println.call(null," ",arglists_14750);

if(cljs.core.truth_(doc_14749)){
cljs.core.println.call(null," ",doc_14749);
} else {
}


var G__14751 = seq__14701_14741;
var G__14752 = chunk__14702_14742;
var G__14753 = count__14703_14743;
var G__14754 = (i__14704_14744 + (1));
seq__14701_14741 = G__14751;
chunk__14702_14742 = G__14752;
count__14703_14743 = G__14753;
i__14704_14744 = G__14754;
continue;
} else {
var temp__5457__auto___14755 = cljs.core.seq.call(null,seq__14701_14741);
if(temp__5457__auto___14755){
var seq__14701_14756__$1 = temp__5457__auto___14755;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14701_14756__$1)){
var c__4351__auto___14757 = cljs.core.chunk_first.call(null,seq__14701_14756__$1);
var G__14758 = cljs.core.chunk_rest.call(null,seq__14701_14756__$1);
var G__14759 = c__4351__auto___14757;
var G__14760 = cljs.core.count.call(null,c__4351__auto___14757);
var G__14761 = (0);
seq__14701_14741 = G__14758;
chunk__14702_14742 = G__14759;
count__14703_14743 = G__14760;
i__14704_14744 = G__14761;
continue;
} else {
var vec__14710_14762 = cljs.core.first.call(null,seq__14701_14756__$1);
var name_14763 = cljs.core.nth.call(null,vec__14710_14762,(0),null);
var map__14713_14764 = cljs.core.nth.call(null,vec__14710_14762,(1),null);
var map__14713_14765__$1 = ((((!((map__14713_14764 == null)))?(((((map__14713_14764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14713_14764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14713_14764):map__14713_14764);
var doc_14766 = cljs.core.get.call(null,map__14713_14765__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14767 = cljs.core.get.call(null,map__14713_14765__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_14763);

cljs.core.println.call(null," ",arglists_14767);

if(cljs.core.truth_(doc_14766)){
cljs.core.println.call(null," ",doc_14766);
} else {
}


var G__14768 = cljs.core.next.call(null,seq__14701_14756__$1);
var G__14769 = null;
var G__14770 = (0);
var G__14771 = (0);
seq__14701_14741 = G__14768;
chunk__14702_14742 = G__14769;
count__14703_14743 = G__14770;
i__14704_14744 = G__14771;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__14715 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__14716 = null;
var count__14717 = (0);
var i__14718 = (0);
while(true){
if((i__14718 < count__14717)){
var role = cljs.core._nth.call(null,chunk__14716,i__14718);
var temp__5457__auto___14772__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___14772__$1)){
var spec_14773 = temp__5457__auto___14772__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_14773));
} else {
}


var G__14774 = seq__14715;
var G__14775 = chunk__14716;
var G__14776 = count__14717;
var G__14777 = (i__14718 + (1));
seq__14715 = G__14774;
chunk__14716 = G__14775;
count__14717 = G__14776;
i__14718 = G__14777;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__14715);
if(temp__5457__auto____$1){
var seq__14715__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14715__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__14715__$1);
var G__14778 = cljs.core.chunk_rest.call(null,seq__14715__$1);
var G__14779 = c__4351__auto__;
var G__14780 = cljs.core.count.call(null,c__4351__auto__);
var G__14781 = (0);
seq__14715 = G__14778;
chunk__14716 = G__14779;
count__14717 = G__14780;
i__14718 = G__14781;
continue;
} else {
var role = cljs.core.first.call(null,seq__14715__$1);
var temp__5457__auto___14782__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___14782__$2)){
var spec_14783 = temp__5457__auto___14782__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_14783));
} else {
}


var G__14784 = cljs.core.next.call(null,seq__14715__$1);
var G__14785 = null;
var G__14786 = (0);
var G__14787 = (0);
seq__14715 = G__14784;
chunk__14716 = G__14785;
count__14717 = G__14786;
i__14718 = G__14787;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
