(this.webpackJsonpsql_exercises=this.webpackJsonpsql_exercises||[]).push([[0],{208:function(e,t,n){},215:function(e,t){},217:function(e,t){},228:function(e,t){},230:function(e,t){},255:function(e,t){},257:function(e,t){},258:function(e,t){},263:function(e,t){},265:function(e,t){},271:function(e,t){},273:function(e,t){},292:function(e,t){},304:function(e,t){},307:function(e,t){},320:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n.n(s),r=n(180),o=n(32),c=n(13),a=(n(208),n(114)),l=n(183),d=n(184),u=n.n(d),j=n(185),b=n(384),m=n(395),p=n(397),h=n(401),f=n(400),x=n(396),O=n(398),v=n(399),g=n(1),y=function(e){var t=e.columns,n=e.values;return Object(g.jsx)(m.a,{elevation:3,sx:{width:"100%"},children:Object(g.jsx)(x.a,{sx:{maxHeight:250},children:Object(g.jsxs)(p.a,{size:"small",stickyHeader:!0,"aria-label":"sticky table",children:[Object(g.jsx)(O.a,{children:Object(g.jsx)(v.a,{children:t.map((function(e,t){return Object(g.jsx)(f.a,{align:"center",sx:{fontWeight:"bold",fontSize:16},children:e},t)}))})}),Object(g.jsx)(h.a,{children:n.map((function(e,t){return Object(g.jsx)(v.a,{hover:!0,role:"checkbox",tabIndex:-1,children:e.map((function(e,t){return Object(g.jsx)(f.a,{align:"center",children:e},t)}))},t)}))})]})})})},_=n(387),q=n(383),E=n(388),k=n(192),w=n(380),C=n(386),S=n(187),R=n.n(S),M=n(379),I=n(315),A=function(e){var t=e.name,n=e.db,r=e.question,o=e.answer,a=Object(s.useState)(""),l=Object(c.a)(a,2),d=l[0],u=l[1],j=Object(s.useState)(null),m=Object(c.a)(j,2),p=m[0],h=m[1],f=Object(s.useState)(null),x=Object(c.a)(f,2),O=x[0],v=x[1],S=Object(s.useState)(0),A=Object(c.a)(S,2),P=A[0],N=A[1],L=Object(s.useState)(""),T=Object(c.a)(L,2),F=T[0],D=T[1],W=Object(s.useState)(!1),H=Object(c.a)(W,2),z=H[0],J=H[1],B=function(e,t){"clickaway"!==t&&J(!1)},U=Object(g.jsx)(i.a.Fragment,{children:Object(g.jsx)(C.a,{size:"small","aria-label":"close",color:"inherit",onClick:B,children:Object(g.jsx)(R.a,{fontSize:"small"})})}),Q="success",V="Correct !";return F?(Q="error",V="Erreur : "+F):0===P&&(Q="warning",V="Mauvais r\xe9sultat."),Object(g.jsxs)(_.a,{mb:4,children:[Object(g.jsx)(w.a,{open:z,autoHideDuration:6e3,action:U,children:Object(g.jsx)(M.a,{onClose:B,severity:Q,sx:{width:"100%"},children:V})}),Object(g.jsxs)(q.a,{container:!0,justifyContent:"center",alignItems:"center",sx:{m:2,fontWeight:"bold"},children:[r,Object(g.jsxs)(q.a,{spacing:2,mb:5,container:!0,justifyContent:"center",alignItems:"center",children:[Object(g.jsx)(q.a,{item:!0,md:10,sm:10,xs:12,children:Object(g.jsx)(_.a,{sx:{border:1,width:"100%"},p:.5,children:Object(g.jsx)(k.a,{height:"13vh",defaultLanguage:"sql",onChange:function(e){return u(e)},options:{lineNumbers:"off",minimap:{enabled:!1}}})})}),Object(g.jsx)(q.a,{item:!0,children:Object(g.jsx)(b.a,{size:"large",variant:"contained",color:"success",onClick:function(){J(!1);try{var e=n.exec(o),t=n.exec(d);h(t),v(e),0===t.length?N(0):N(I(t[0].values,e[0].values)?1:0)}catch(s){console.log(s),D(s.message)}J(!0)},children:"Valider"})})]}),Object(g.jsxs)(q.a,{container:!0,justifyContent:"center",alignItems:"center",spacing:2,direction:"row",children:[p&&Object(g.jsx)(q.a,{item:!0,md:5.5,xs:12,children:Object(g.jsxs)(E.a,{align:"center",children:[p.map((function(e){var t=e.columns,n=e.values;return Object(g.jsx)(y,{columns:t,values:n})})),Object(g.jsx)("br",{}),"R\xe9sultat de votre requ\xeate"]})}),O&&Object(g.jsx)(q.a,{item:!0,md:5.5,xs:12,children:Object(g.jsxs)(E.a,{align:"center",children:[O.map((function(e){var t=e.columns,n=e.values;return Object(g.jsx)(y,{columns:t,values:n})})),Object(g.jsx)("br",{}),"R\xe9sultat attendu"]})})]})]})]},t)},P=n(378),N=n(389),L=function(e){var t=Object(s.useState)(1),n=Object(c.a)(t,2),i=n[0],r=n[1],o=Object(s.useState)(null),d=Object(c.a)(o,2),b=d[0],m=d[1];return Object(s.useEffect)((function(){Object(l.a)(Object(a.a)().mark((function t(){var n,s,i,r,o,l,d;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u()({locateFile:function(){return j.a}}),s=fetch(e.db_url).then((function(e){return e.text()})),t.next=4,Promise.all([n,s]);case 4:i=t.sent,r=Object(c.a)(i,2),o=r[0],l=r[1],(d=new o.Database).exec(l),m(d);case 11:case"end":return t.stop()}}),t)})))()}),[]),Object(g.jsxs)("div",{children:[Object(g.jsxs)(q.a,{container:!0,justifyContent:"center",alignItems:"center",children:[e.description&&Object(g.jsx)(q.a,{item:!0,sm:4,xs:12,children:Object(g.jsx)(_.a,{sx:{borderLeft:2.5,borderColor:"gray",padding:2},children:e.description})}),Object(g.jsx)(q.a,{item:!0,sm:8,xs:12,children:e.diagram&&Object(g.jsx)("iframe",{width:"100%",height:"450",src:"https://dbdiagram.io/embed/"+e.diagram})})]}),Object(g.jsx)(N.a,{sx:{m:3}}),Object(g.jsx)(q.a,{container:!0,justifyContent:"center",alignItems:"center",children:Object(g.jsx)(P.a,{siblingCount:e.questions.length,count:e.questions.length,page:i,onChange:function(e,t){r(t)}})}),e.questions.map((function(t,n){return Object(g.jsx)("div",{style:{display:n+1===i?"block":"none"},children:Object(g.jsx)(A,{name:e.name,db:b,question:e.questions[n],answer:e.answers[n]})})}))]},e.name)},T={name:"Pok\xe9mon",description:Object(g.jsx)("div",{children:"Base de donn\xe9es contenant les pok\xe9mons de la 1\xe8re g\xe9n\xe9ration."}),db_url:"https://raw.githubusercontent.com/fortierq/datasets/main/pokemon/pokemon.sql",diagram:"62853fe17f945876b6459548",questions:["Calculer le nombre de pok\xe9mons.","Afficher le nom de chaque pok\xe9mon avec son niveau d'\xe9volution.","Afficher les pok\xe9mons d\xe9tenus par Pierre.","Afficher le nom de chaque attaque avec son type.","Afficher chaque dresseur avec chacun de ses pok\xe9mons.","Afficher chaque pok\xe9mon avec son \xe9volution et son niveau d'\xe9volution.","Afficher chaque dresseur avec son nombre de pok\xe9mons et leur niveau moyen","Afficher les dresseurs qui poss\xe8dent au moins 4 pok\xe9mons de niveau au moins 30"],answers:["SELECT count(*) FROM pokemons;","select nom, niveau from evolue_en join pokemons on id = pokemon_base_id","SELECT pokemons.nom FROM pokemons JOIN detient_pokemons ON pokemons.id = pokemon_id JOIN dresseurs ON dresseurs.id = dresseur_id WHERE dresseurs.nom = 'Pierre'","select types.libelle, attaques.libelle from types join attaques on types.id = type_id","select dresseurs.nom, pokemons.nom from pokemons join detient_pokemons on pokemons.id = pokemon_id join dresseurs on dresseurs.id = dresseur_id","select pokemons.nom, pokemons_evol.nom, niveau from evolue_en join pokemons on pokemon_base_id = pokemons.id join pokemons as pokemons_evol on pokemon_evol_id = pokemons_evol.id","select nom, count(*) as nombre_pokemons, avg(niveau) as niveau_moyen from dresseurs join detient_pokemons on id = dresseur_id group by nom","select nom, count(*) from dresseurs join detient_pokemons on id = dresseur_id where niveau >= 50 group by nom having count(*) > 3"]},F={name:"Concours",description:Object(g.jsxs)("div",{children:["Statistiques sur les concours des \xe9coles d'ing\xe9nieurs en 2022. ",Object(g.jsx)("br",{})," ",Object(g.jsx)("a",{href:"https://www.scei-concours.fr/statistiques.php",children:"Source : SCEI"}),". "]}),db_url:"https://raw.githubusercontent.com/fortierq/datasets/main/concours/concours.sql",diagram:"642ec2708615191cfa8bf1a2",questions:["Donner le coefficient total des math\xe9matiques au concours ccinp.","Donner le coefficient des math\xe9matiques au concours ccinp, en pourcentage."],answers:["SELECT SUM(coefficient) as 'Coefficient des math\xe9matiques' FROM epreuve JOIN concours ON concours_id=concours.id JOIN epreuve_matiere ON epreuve_id=epreuve.id WHERE concours.nom='ccinp' AND matiere='math\xe9matiques';","SELECT(SELECT SUM(coefficient) FROM epreuve JOIN concours ON concours_id=concours.id JOIN epreuve_matiere ON epreuve_id=epreuve.id WHERE concours.nom='ccinp' AND matiere='math\xe9matiques')/(SELECT SUM(coefficient) FROM epreuve JOIN concours ON concours_id=concours.id JOIN epreuve_matiere ON epreuve_id=epreuve.id) as 'Pourcentage math\xe9matiques';"]},D={name:"Valeur fonci\xe8re",diagram:"630bbf70f1a9b01b0ffa30be",db_url:"https://raw.githubusercontent.com/fortierq/datasets/main/fonciere/fonciere.sql",description:Object(g.jsxs)("div",{children:["Informations sur une partie des ventes immobili\xe8res 2021 en France."," ",Object(g.jsx)("br",{}),"La ",Object(g.jsx)("b",{children:"valeur fonci\xe8re"})," est l'estimation de la valeur d'un terrain."," ",Object(g.jsx)("br",{}),"Les noms de voie et de commune sont en majuscules.",Object(g.jsx)("br",{}),Object(g.jsx)("a",{href:"https://cadastre.data.gouv.fr/dvf",children:"Source : data.gouv"}),"."]}),questions:["Quel est le nombre moyen de m2 du b\xe2ti ?"],answers:["select avg(surface_reelle_bati) as 'nombre moyen de m2 du b\xe2ti' from fonciere;"]},W={name:"Pays",description:Object(g.jsxs)("div",{children:["Base de donn\xe9es contenant les pays du monde et leurs populations en 2015.",Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("code",{children:"croissance_population"}),", ",Object(g.jsx)("code",{children:"taux_naissance"}),", ",Object(g.jsx)("code",{children:"taux_deces"})," et ",Object(g.jsx)("code",{children:"taux_migration"})," sont en pourcentage (si ",Object(g.jsx)("code",{children:"croissance_population"})," vaut 2% alors la population a augment\xe9 de 2% durant l'ann\xe9e).",Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("a",{href:"https://www.cia.gov/the-world-factbook",children:"Source : CIA"}),"."]}),db_url:"https://raw.githubusercontent.com/fortierq/datasets/main/pays/pays.sql",diagram:"642c778b5758ac5f1726bc6c",questions:["Afficher le nom, la population et la surface de chaque pays. Les colonnes doivent \xeatre dans l'ordre.","Afficher le nom et la population des pays ayant moins de 2000 d'habitants.","Afficher les pays dont le taux de naissance est inf\xe9rieur au taux de d\xe9c\xe8s.","Afficher la population totale sur Terre, en milliards. On pourra diviser par 1e9.","Afficher le nombre total de naissances sur Terre.","Afficher les 10 pays de plus de 5 millions d'habitants ayant le plus fort taux de migration. On affichera aussi le taux de migration.","Afficher les 10 pays ayant la plus forte densit\xe9 de population. On affichera aussi la densit\xe9."],answers:["SELECT nom, population, surface FROM pays","SELECT nom, population FROM pays WHERE population <= 2000","select nom from pays where taux_naissance < taux_deces","select sum(population)/1e9 as 'population totale' from pays","select sum(population*taux_naissance/100.)/1000000000. as 'nombre de naissances' from pays","select nom, taux_migration from pays where population > 5000000 order by taux_migration desc limit 10","select nom, population/surface as densit\xe9 from pays where population > 5000000 order by densit\xe9 desc limit 10"]},H={name:"M\xe9tro parisien",description:Object(g.jsxs)(q.a,{children:["Cette base de donn\xe9es contient une table ",Object(g.jsx)("code",{children:"metro"})," contenant les stations de m\xe9tro et RER parisiennes. Attributs de la table :",Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{children:[Object(g.jsx)("code",{children:"station"})," : nom de la station"]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("code",{children:"reseau"})," : ",Object(g.jsx)("code",{children:"'M\xe9tro'"})," ou ",Object(g.jsx)("code",{children:"'Rer'"})]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("code",{children:"trafic"})," : nombre de passagers en 2021"]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("code",{children:"ville"})," : ville de la station (exemples :"," ",Object(g.jsx)("code",{children:"'Paris'"}),")"]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("code",{children:"arrondissement"})," : arrondissement de la station (uniquement pour Paris)"]})]}),Object(g.jsx)("a",{href:"https://www.data.gouv.fr/fr/datasets/stations-de-metro",children:"Source : data.gouv"}),"."]}),db_url:"https://raw.githubusercontent.com/fortierq/datasets/main/metro_paris/metro_paris.sql",diagram:"630e18a30911f91ba5f92ffa",questions:["Afficher toutes les stations.","Afficher les stations de la ville de Massy.","Afficher les stations de RER du 5\xe8me arrondissement de Paris.","Combien y a-t-il eu de passagers dans la ville de Saint Denis en 2021 ?","Afficher le nom et la ville de toutes les stations en dehors de Paris avec un trafic sup\xe9rieur \xe0 10 millions","Afficher la station et le trafic de la station la plus fr\xe9quent\xe9e."],answers:["SELECT DISTINCT station FROM metro","SELECT station FROM metro WHERE ville = 'Massy'","SELECT station FROM metro WHERE arrondissement = 5 AND reseau = 'Rer'","SELECT SUM(trafic) as 'Nombre de passagers' FROM metro WHERE ville = 'Saint Denis'","SELECT station, ville FROM metro WHERE ville != 'Paris' AND trafic > 10000000","SELECT station, trafic FROM metro ORDER BY trafic DESC LIMIT 1"]},z={};[H,T,D,W,F].forEach((function(e){z[e.name]=e}));var J=n(393),B=n(392),U=n(377),Q=n(391),V=n(381),G=n(375),Y=n(390),K=n(394),X=n(191),Z=n.n(X),$=n(189),ee=n.n($),te=240,ne={"Requ\xeates sur une table":{url:"1_select/select.pdf",exos:["Pays","M\xe9tro parisien"]},"Plusieurs tables":{url:"2_join/join.pdf",exos:[]},"Fonctions d'agr\xe9gation":{url:"3_groupby/groupby.pdf",exos:["Pok\xe9mon"]},"Requ\xeates imbriqu\xe9es":{url:"4_imbrique/imbrique.pdf",exos:["Concours"]}},se=["Valeur fonci\xe8re"];function ie(e){var t=e.window,n=i.a.useState(!1),s=Object(c.a)(n,2),r=s[0],a=s[1],l=i.a.useState(null),d=Object(c.a)(l,2),u=d[0],j=d[1],b=function(){a(!r)},m=void 0!==t?function(){return t().document.body}:void 0,p=function(e){return Object(g.jsx)(V.a,{children:Object(g.jsx)(Y.a,{primary:Object(g.jsx)(q.a,{container:!0,justifyContent:"center",alignItems:"center",sx:{fontWeight:"bold"},children:Object(g.jsx)(E.a,{style:{fontWeight:"bold"},children:e})})})},e)},h=function(e){return Object(g.jsx)(V.a,{disablePadding:!0,children:Object(g.jsxs)(G.a,{disableRipple:!0,selected:u===e,onClick:function(t){j(e),a(!1)},children:["Exercice : ",e]})},e)},f=Object(g.jsx)("div",{children:Object(g.jsxs)(Q.a,{children:[Object.entries(ne).map((function(e){var t=Object(c.a)(e,2),n=t[0],s=t[1],i=(s.url,s.exos);return Object(g.jsxs)("div",{children:[p(n),Object(g.jsx)(V.a,{disablePadding:!0,children:Object(g.jsx)(G.a,{disableRipple:!0,selected:u===n,onClick:function(e){j(n),a(!1)},children:"Cours"})},n),i.map(h),Object(g.jsx)(N.a,{sx:{border:1}})]})})),p("Exercices g\xe9n\xe9raux"),se.map(h)]})}),x={};return Object.values(z).forEach((function(e){return x[e.name]=Object(g.jsx)(L,Object(o.a)({},e),e.name)})),Object(g.jsx)("div",{children:Object(g.jsxs)(_.a,{sx:{display:"flex"},children:[Object(g.jsx)(B.a,{}),Object(g.jsx)(J.a,{position:"fixed",sx:{width:{sm:"calc(100% - ".concat(te,"px)")},ml:{sm:"".concat(te,"px")},height:60},children:Object(g.jsxs)(K.a,{children:[Object(g.jsx)(ee.a,{href:"https://github.com/cours-sql/cours-sql.github.io",direction:"right",size:"60"}),Object(g.jsx)(C.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:b,sx:{mr:2,display:{sm:"none"}},children:Object(g.jsx)(Z.a,{})}),Object(g.jsx)(E.a,{variant:"h6",noWrap:!0,component:"div",children:u||"Cours de bases de donn\xe9es et exercices SQL"})]})}),Object(g.jsxs)(_.a,{component:"nav",sx:{width:{sm:te},flexShrink:{sm:0}},children:[Object(g.jsx)(U.a,{container:m,variant:"temporary",open:r,onClose:b,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:te}},children:f}),Object(g.jsx)(U.a,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:te,border:1.5}},open:!0,children:f})]}),Object(g.jsxs)(_.a,{component:"main",sx:{flexGrow:1,p:3,width:{sm:"calc(100% - ".concat(te,"px)")}},children:[Object(g.jsx)(K.a,{}),u in x&&x[u],u in ne&&Object(g.jsx)("iframe",{src:"https://mozilla.github.io/pdf.js/web/viewer.html?file=https://raw.githubusercontent.com/fortierq/cours/main/sql/cours/".concat(ne[u].url,"#zoom=page-fit&pagemode=none"),width:"100%",height:"800"}),!u&&Object(g.jsxs)("div",{children:["Ce site propose des cours et exercices interactifs pour apprendre SQL et comprendre le fonctionnement des bases de donn\xe9es.",Object(g.jsx)("br",{}),"Il est conforme au programme de CPGE (fili\xe8res MP2I, MP, PC, PSI, PT, BCPST).",Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)(q.a,{container:!0,justifyContent:"center",alignItems:"center",children:Object(g.jsx)("img",{src:"https://raw.githubusercontent.com/cours-sql/cours-sql.github.io/main/src/xkcd.png",width:"600"})}),Object(g.jsx)("br",{}),Object(g.jsx)("a",{href:"https://fortierq.github.io/teaching>",children:"Mes autres cours"}),"."]})]})]})})}var re=document.getElementById("root");Object(r.createRoot)(re).render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(ie,{})}))}},[[320,1,2]]]);
//# sourceMappingURL=main.ac58e4b0.chunk.js.map