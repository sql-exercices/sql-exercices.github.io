(this.webpackJsonpsql_exercises=this.webpackJsonpsql_exercises||[]).push([[0],{210:function(e,n,t){},217:function(e,n){},219:function(e,n){},230:function(e,n){},232:function(e,n){},257:function(e,n){},259:function(e,n){},260:function(e,n){},265:function(e,n){},267:function(e,n){},273:function(e,n){},275:function(e,n){},294:function(e,n){},306:function(e,n){},309:function(e,n){},322:function(e,n,t){"use strict";t.r(n);var s=t(0),i=t.n(s),r=t(180),o=t(14),c=t(17),a=(t(210),t(114)),u=t(183),l=t(184),d=t.n(l),j=t(185),m=t(384),b=t(388),p=t(390),h=t(379),f=t(192),O=t(187),x=t.n(O),v=t(380),g=t(385),E=t(387),_=t(381),q=t(389),y=t(396),w=t(398),S=t(402),k=t(401),C=t(397),R=t(399),N=t(400),M=t(1),A=function(e){var n=e.columns,t=e.values;return Object(M.jsx)(y.a,{elevation:3,sx:{width:"100%"},children:Object(M.jsx)(C.a,{sx:{maxHeight:250},children:Object(M.jsxs)(w.a,{size:"small",stickyHeader:!0,"aria-label":"sticky table",children:[Object(M.jsx)(R.a,{children:Object(M.jsx)(N.a,{children:n.map((function(e,n){return Object(M.jsx)(k.a,{align:"center",sx:{fontWeight:"bold",fontSize:16},children:e},n)}))})}),Object(M.jsx)(S.a,{children:t.map((function(e,n){return Object(M.jsx)(N.a,{hover:!0,role:"checkbox",tabIndex:-1,children:e.map((function(e,n){return Object(M.jsx)(k.a,{align:"center",children:e},n)}))},n)}))})]})})})},I=t(317);function P(e){return e.map((function(e){return e.map((function(e){return"number"===typeof e?Math.round(100*e)/100:e}))}))}var T=function(e){var n=e.name,t=e.db,r=e.question,c=e.answer,a=Object(s.useState)(""),u=Object(o.a)(a,2),l=u[0],d=u[1],j=Object(s.useState)(null),p=Object(o.a)(j,2),h=p[0],O=p[1],y=Object(s.useState)(null),w=Object(o.a)(y,2),S=w[0],k=w[1],C=Object(s.useState)(0),R=Object(o.a)(C,2),N=R[0],T=R[1],L=Object(s.useState)(null),F=Object(o.a)(L,2),D=F[0],J=F[1],W=Object(s.useState)(!1),H=Object(o.a)(W,2),U=H[0],z=H[1],B=function(e,n){"clickaway"!==n&&z(!1)},G=Object(M.jsx)(i.a.Fragment,{children:Object(M.jsx)(E.a,{size:"small","aria-label":"close",color:"inherit",onClick:B,children:Object(M.jsx)(x.a,{fontSize:"small"})})}),Y="success",Q="Correct !";return D?(Y="error",Q="Erreur : "+D):0===N&&(Y="warning",Q="Mauvais r\xe9sultat."),Object(M.jsxs)(b.a,{mb:4,children:[Object(M.jsx)(_.a,{open:U,autoHideDuration:6e3,action:G,children:Object(M.jsx)(v.a,{onClose:B,severity:Y,sx:{width:"100%"},children:Q})}),Object(M.jsxs)(m.a,{container:!0,justifyContent:"center",alignItems:"center",sx:{m:2,fontWeight:"bold"},children:[r,Object(M.jsxs)(m.a,{spacing:2,mb:5,container:!0,justifyContent:"center",alignItems:"center",children:[Object(M.jsx)(m.a,{item:!0,xs:10,children:Object(M.jsx)(b.a,{sx:{border:1,width:"100%"},p:.5,children:Object(M.jsx)(f.a,{height:"13vh",defaultLanguage:"sql",onChange:function(e){return d(e)},options:{lineNumbers:"off",minimap:{enabled:!1}}})})}),Object(M.jsx)(m.a,{item:!0,children:Object(M.jsx)(g.a,{size:"large",variant:"contained",color:"success",onClick:function(){z(!1);try{var e=t.exec(c),n=t.exec(l);O(n),k(e),0===n.length?T(0):T(I(P(n[0].values),P(e[0].values))?1:0),J(null)}catch(s){console.log(s),J(s.message)}z(!0)},children:"Valider"})})]}),Object(M.jsxs)(m.a,{container:!0,justifyContent:"center",alignItems:"center",spacing:2,direction:"row",children:[h&&Object(M.jsx)(m.a,{item:!0,md:5.5,xs:12,children:Object(M.jsxs)(q.a,{align:"center",children:[h.map((function(e){var n=e.columns,t=e.values;return Object(M.jsx)(A,{columns:n,values:t})})),Object(M.jsx)("br",{}),"R\xe9sultat de votre requ\xeate"]})}),S&&Object(M.jsx)(m.a,{item:!0,md:5.5,xs:12,children:Object(M.jsxs)(q.a,{align:"center",children:[S.map((function(e){var n=e.columns,t=e.values;return Object(M.jsx)(A,{columns:n,values:t})})),Object(M.jsx)("br",{}),"R\xe9sultat attendu"]})})]})]})]},n)},L=function(e){var n=Object(s.useState)(1),t=Object(o.a)(n,2),i=t[0],r=t[1],c=Object(s.useState)(null),l=Object(o.a)(c,2),f=l[0],O=l[1];return Object(s.useEffect)((function(){Object(u.a)(Object(a.a)().mark((function n(){var t,s,i,r,c,u,l;return Object(a.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=d()({locateFile:function(){return j.a}}),s=fetch(e.db_url).then((function(e){return e.text()})),n.next=4,Promise.all([t,s]);case 4:i=n.sent,r=Object(o.a)(i,2),c=r[0],u=r[1],(l=new c.Database).exec(u),O(l);case 11:case"end":return n.stop()}}),n)})))()}),[]),Object(M.jsxs)("div",{children:[Object(M.jsxs)(m.a,{container:!0,justifyContent:"center",alignItems:"center",children:[e.description&&Object(M.jsx)(m.a,{item:!0,sm:4,xs:12,children:Object(M.jsx)(b.a,{sx:{borderLeft:2.5,borderColor:"gray",padding:2},children:e.description})}),Object(M.jsx)(m.a,{item:!0,sm:8,xs:12,children:e.diagram&&Object(M.jsx)("iframe",{width:"100%",height:"450",src:"https://dbdiagram.io/embed/"+e.diagram})})]}),Object(M.jsx)(p.a,{sx:{m:2}}),Object(M.jsx)(m.a,{container:!0,justifyContent:"center",alignItems:"center",children:Object(M.jsx)(h.a,{siblingCount:e.questions.length,count:e.questions.length,page:i,onChange:function(e,n){r(n)}})}),e.questions.map((function(n,t){return Object(M.jsx)("div",{style:{display:t+1===i?"block":"none"},children:Object(M.jsx)(T,{name:e.name,db:f,question:e.questions[t],answer:e.answers[t]})})}))]},e.name)},F={name:"Pok\xe9mon",description:Object(M.jsx)("div",{children:"Base de donn\xe9es contenant les pok\xe9mons de la 1\xe8re g\xe9n\xe9ration."}),db_url:"https://raw.githubusercontent.com/fortierq/datasets/main/pokemon/pokemon.sql",diagram:"62853fe17f945876b6459548",questions:["Calculer le nombre de pok\xe9mons.","Afficher le nom de chaque pok\xe9mon avec son niveau d'\xe9volution.","Afficher les pok\xe9mons d\xe9tenus par Pierre.","Afficher le nom de chaque attaque avec son type.","Afficher chaque dresseur avec chacun de ses pok\xe9mons.","Afficher chaque pok\xe9mon avec son \xe9volution et son niveau d'\xe9volution."],answers:["SELECT count(*) FROM pokemons;","select nom, niveau from evolue_en join pokemons on id = pokemon_base_id","SELECT pokemons.nom FROM pokemons JOIN detient_pokemons ON pokemons.id = pokemon_id JOIN dresseurs ON dresseurs.id = dresseur_id WHERE dresseurs.nom = 'Pierre'","select types.libelle, attaques.libelle from types join attaques on types.id = type_id","select dresseurs.nom, pokemons.nom from pokemons join detient_pokemons on pokemons.id = pokemon_id join dresseurs on dresseurs.id = dresseur_id","select pokemons.nom, pokemons_evol.nom, niveau from evolue_en join pokemons on pokemon_base_id = pokemons.id join pokemons as pokemons_evol on pokemon_evol_id = pokemons_evol.id"]},D=Object(c.a)(Object(c.a)({},F),{},{questions:["Afficher chaque dresseur avec son nombre de pok\xe9mons et leur niveau moyen.","Afficher les dresseurs qui poss\xe8dent au moins 4 pok\xe9mons de niveau au moins 50."],answers:["select nom, count(*) as nombre_pokemons, avg(niveau) as niveau_moyen from dresseurs join detient_pokemons on id = dresseur_id group by nom","select nom, count(*) from dresseurs join detient_pokemons on id = dresseur_id where niveau >= 50 group by nom having count(*) > 3"]}),J={name:"Concours",description:Object(M.jsxs)("div",{children:["Statistiques partielles sur les concours des \xe9coles d'ing\xe9nieurs en 2022. ",Object(M.jsx)("br",{})," ",Object(M.jsx)("a",{href:"https://www.scei-concours.fr/statistiques.php",children:"Source : SCEI"}),". "]}),db_url:"https://raw.githubusercontent.com/fortierq/datasets/main/concours/concours.sql",diagram:"642ec2708615191cfa8bf1a2",questions:["Afficher les noms des concours dans la base de donn\xe9es.","Afficher les \xe9preuves \xe0 l'\xe9crit de cmp (Concours Mines-Ponts) : fili\xe8re, mati\xe8re, dur\xe9e et coefficient.","Donner le coefficient total des math\xe9matiques au concours ccinp."],answers:["select distinct nom from concours;","SELECT filiere, matiere, duree, coefficient FROM epreuve JOIN concours ON concours_id=concours.id JOIN epreuve_matiere ON epreuve_id=epreuve.id WHERE concours.nom = 'cmp' AND NOT oral","SELECT SUM(coefficient) as 'coefficient des math\xe9matiques' FROM epreuve JOIN concours ON concours_id=concours.id JOIN epreuve_matiere ON epreuve_id=epreuve.id WHERE concours.nom='ccinp' AND matiere='math\xe9matiques';"]},W=Object(c.a)(Object(c.a)({},J),{},{questions:["Afficher le coefficient total de chaque mati\xe8re pour la fili\xe8re mpi du concours ccinp.","Pour chaque concours, afficher le nom, la fili\xe8re, le nombre d'\xe9preuves \xe9crites et leur dur\xe9e totale."],answers:["SELECT matiere, SUM(coefficient) as 'coefficient total' FROM epreuve JOIN concours ON concours_id=concours.id JOIN epreuve_matiere ON epreuve_id=epreuve.id WHERE concours.nom='ccinp' AND filiere = 'mpi' GROUP BY matiere;","SELECT concours.nom, filiere, COUNT(*) as 'nombre \xe9preuves', SUM(duree) as 'dur\xe9e totale' FROM epreuve JOIN concours ON concours_id=concours.id WHERE NOT oral GROUP BY concours_id;"]}),H=Object(c.a)(Object(c.a)({},J),{},{questions:["Donner le poids de chaque mati\xe8re en fili\xe8re mp du concours ccinp, en pourcentage."],answers:["SELECT matiere, SUM(coefficient) * 100 / (SELECT SUM(coefficient) FROM epreuve JOIN concours ON concours_id=concours.id JOIN epreuve_matiere ON epreuve_id=epreuve.id WHERE concours.nom='ccinp' AND filiere='mp') as 'poids en pourcentage' FROM epreuve JOIN concours ON concours_id=concours.id JOIN epreuve_matiere ON epreuve_id=epreuve.id WHERE concours.nom='ccinp' AND filiere='mp' GROUP BY matiere;","SELECT matiere, (SUM(coefficient) * 100 / (SELECT SUM(coefficient) FROM epreuve JOIN concours ON concours_id=concours.id JOIN epreuve_matiere ON epreuve_id=epreuve.id WHERE concours.nom='ccinp' AND filiere='mp') as 'poids en pourcentage' FROM epreuve JOIN concours ON concours_id=concours.id JOIN epreuve_matiere ON epreuve_id=epreuve.id WHERE concours.nom='ccinp' AND filiere='mp' GROUP BY matiere;"]}),U={name:"Pays",description:Object(M.jsxs)("div",{children:["Base de donn\xe9es contenant les pays du monde et leurs populations en 2015.",Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),Object(M.jsx)("code",{children:"croissance_population"}),", ",Object(M.jsx)("code",{children:"taux_naissance"}),", ",Object(M.jsx)("code",{children:"taux_deces"})," et ",Object(M.jsx)("code",{children:"taux_migration"})," sont en pourcentage (si ",Object(M.jsx)("code",{children:"croissance_population"})," vaut 2% alors la population a augment\xe9 de 2% durant l'ann\xe9e).",Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),Object(M.jsx)("a",{href:"https://www.cia.gov/the-world-factbook",children:"Source : CIA"}),"."]}),db_url:"https://raw.githubusercontent.com/fortierq/datasets/main/pays/pays.sql",diagram:"642c778b5758ac5f1726bc6c",questions:["Afficher le nom, la population et la surface de chaque pays.","Afficher le nom et la population des pays ayant moins de 2000 d'habitants.","Afficher les pays dont le taux de naissance est inf\xe9rieur au taux de d\xe9c\xe8s.","Afficher la population totale sur Terre, en milliards. On pourra diviser par 1e9.","Afficher le nombre total de naissances sur Terre en 2015, en milliards.","Afficher les 10 pays de plus de 5 millions d'habitants ayant eu le plus fort taux de migration. On affichera aussi le taux de migration.","Afficher les 10 pays d'au moins 5 millions d'habitants ayant la plus forte densit\xe9 de population. On affichera aussi la densit\xe9."],answers:["SELECT nom, population, surface FROM pays","SELECT nom, population FROM pays WHERE population <= 2000","select nom from pays where taux_naissance < taux_deces","select sum(population)/1e9 as 'population totale' from pays","select sum(population*taux_naissance/100.)/1e9 as 'nombre de naissances' from pays","select nom, taux_migration from pays where population > 5e6 order by taux_migration desc limit 10","select nom, population/surface as densit\xe9 from pays where population > 5e6 order by densit\xe9 desc limit 10"]},z=[{name:"Requ\xeates sur une table",url:"1_select/select.pdf",exos:[{name:"M\xe9tro parisien",description:Object(M.jsxs)(m.a,{children:["Cette base de donn\xe9es contient une table ",Object(M.jsx)("code",{children:"metro"})," contenant les stations de m\xe9tro et RER parisiennes. Attributs de la table :",Object(M.jsxs)("ul",{children:[Object(M.jsxs)("li",{children:[Object(M.jsx)("code",{children:"station"})," : nom de la station"]}),Object(M.jsxs)("li",{children:[Object(M.jsx)("code",{children:"reseau"})," : ",Object(M.jsx)("code",{children:"'M\xe9tro'"})," ou ",Object(M.jsx)("code",{children:"'Rer'"})]}),Object(M.jsxs)("li",{children:[Object(M.jsx)("code",{children:"trafic"})," : nombre de passagers en 2021"]}),Object(M.jsxs)("li",{children:[Object(M.jsx)("code",{children:"ville"})," : ville de la station (exemples :"," ",Object(M.jsx)("code",{children:"'Paris'"}),")"]}),Object(M.jsxs)("li",{children:[Object(M.jsx)("code",{children:"arrondissement"})," : arrondissement de la station (uniquement pour Paris)"]})]}),Object(M.jsx)("a",{href:"https://www.data.gouv.fr/fr/datasets/stations-de-metro",children:"Source : data.gouv"}),"."]}),db_url:"https://raw.githubusercontent.com/fortierq/datasets/main/metro_paris/metro_paris.sql",diagram:"630e18a30911f91ba5f92ffa",questions:["Afficher toutes les stations.","Afficher les stations de la ville de Massy.","Afficher les stations de RER du 5\xe8me arrondissement de Paris.","Combien y a-t-il eu de passagers dans la ville de Saint Denis ?","Afficher le nom et la ville de toutes les stations en dehors de Paris avec un trafic sup\xe9rieur \xe0 10 millions","Afficher la station et le trafic de la station la plus fr\xe9quent\xe9e."],answers:["SELECT station FROM metro","SELECT station FROM metro WHERE ville = 'Massy'","SELECT station FROM metro WHERE arrondissement = 5 AND reseau = 'Rer'","SELECT SUM(trafic) as 'Nombre de passagers' FROM metro WHERE ville = 'Saint Denis'","SELECT station, ville FROM metro WHERE ville != 'Paris' AND trafic > 10000000","SELECT station, trafic FROM metro ORDER BY trafic DESC LIMIT 1"]},U]},{name:"Plusieurs tables",url:"2_join/join.pdf",exos:[J,F]},{name:"Fonctions d'agr\xe9gation",url:"3_groupby/groupby.pdf",exos:[W,D]},{name:"Requ\xeates imbriqu\xe9es",url:"4_imbrique/imbrique.pdf",exos:[H]}],B=t(394),G=t(393),Y=t(378),Q=t(391),V=t(382),K=t(376),X=t(392),Z=t(395),$=t(191),ee=t.n($),ne=t(189),te=t.n(ne),se=t(196);function ie(e){return Object(M.jsx)(se.a,Object(c.a)(Object(c.a)({},e),{},{children:Object(M.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})}))}var re=240;function oe(e){var n=e.window,t=i.a.useState(!1),s=Object(o.a)(t,2),r=s[0],a=s[1],u=i.a.useState(null),l=Object(o.a)(u,2),d=l[0],j=l[1],h=function(){a(!r)},f=void 0!==n?function(){return n().document.body}:void 0,O=function(e){return Object(M.jsx)(V.a,{disablePadding:!0,children:Object(M.jsxs)(K.a,{disableRipple:!0,selected:d===e,onClick:function(n){j(e),a(!1)},children:["Exercice : ",e.name]})},e.questions[0])},x=Object(M.jsx)("div",{children:Object(M.jsx)(Q.a,{children:z.map((function(e){return Object(M.jsxs)("div",{children:[Object(M.jsx)(V.a,{disablePadding:!0,children:Object(M.jsx)(X.a,{primary:Object(M.jsx)(m.a,{container:!0,justifyContent:"center",alignItems:"center",sx:{fontWeight:"bold"},children:Object(M.jsx)(q.a,{style:{fontWeight:"bold"},children:e.name})})})},e.name),Object(M.jsx)(V.a,{disablePadding:!0,children:Object(M.jsx)(K.a,{disableRipple:!0,selected:d===e,onClick:function(n){j(e),a(!1)},children:"Cours"})},e.name+"2"),e.exos.map(O),Object(M.jsx)(p.a,{sx:{border:1}})]})}))})}),v=Object(M.jsxs)("div",{children:["Ce site propose des cours et exercices interactifs pour apprendre SQL et comprendre le fonctionnement des bases de donn\xe9es.",Object(M.jsx)("br",{}),"Il est conforme au programme de CPGE (fili\xe8res MP2I, MP, PC, PSI, PT, BCPST).",Object(M.jsx)("br",{}),Object(M.jsx)("b",{children:"Attention : dans vos r\xe9ponses, les colonnes doivent appara\xeetre dans le m\xeame ordre que dans la question."}),Object(M.jsx)("br",{}),Object(M.jsx)("a",{href:"https://github.com/sql-exercices/sql-exercices.github.io/issues",children:"Signaler un probl\xe8me"}),Object(M.jsx)("br",{}),Object(M.jsx)("a",{href:"https://github.com/fortierq/datasets",children:"Bases de donn\xe9es utilis\xe9es"}),Object(M.jsx)("br",{}),Object(M.jsx)("a",{href:"https://github.com/sql-exercices/sql-exercices.github.io/tree/main/src/exos",children:"Contribuer en ajoutant un exercice ou des questions (par pull request)"}),Object(M.jsx)("br",{}),Object(M.jsx)("a",{href:"https://fortierq.github.io/teaching",children:"Mes autres cours"})]});return d&&(v="url"in d?Object(M.jsx)("iframe",{src:"https://mozilla.github.io/pdf.js/web/viewer.html?file=https://raw.githubusercontent.com/fortierq/cours/main/sql/cours/".concat(d.url,"#zoom=page-fit&pagemode=none"),width:"100%",height:"700"}):Object(M.jsx)(L,Object(c.a)({},d),d.questions[0])),Object(M.jsx)("div",{children:Object(M.jsxs)(b.a,{sx:{display:"flex"},children:[Object(M.jsx)(G.a,{}),Object(M.jsx)(B.a,{position:"fixed",sx:{width:{sm:"calc(100% - ".concat(re,"px)")},ml:{sm:"".concat(re,"px")},height:60},children:Object(M.jsxs)(Z.a,{children:[Object(M.jsx)(te.a,{href:"https://github.com/sql-exercices/sql-exercices.github.io",direction:"right",size:"60"}),Object(M.jsx)(E.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:h,sx:{mr:2,display:{sm:"none"}},children:Object(M.jsx)(ee.a,{})}),Object(M.jsx)(E.a,{disableRipple:!0,color:"inherit","aria-label":"open drawer",edge:"start",onClick:function(e){j(null)},sx:{mr:1},children:Object(M.jsx)(ie,{fontSize:"large"})}),Object(M.jsx)(q.a,{variant:"h6",noWrap:!0,component:"div",children:"Cours et exercices SQL"})]})}),Object(M.jsxs)(b.a,{component:"nav",sx:{width:{sm:re},flexShrink:{sm:0}},children:[Object(M.jsx)(Y.a,{container:f,variant:"temporary",open:r,onClose:h,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:re}},children:x}),Object(M.jsx)(Y.a,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:re,border:1.5}},open:!0,children:x})]}),Object(M.jsxs)(b.a,{component:"main",sx:{flexGrow:1,p:3,width:{sm:"calc(100% - ".concat(re,"px)")}},children:[Object(M.jsx)(Z.a,{}),v]})]})})}var ce=document.getElementById("root");Object(r.createRoot)(ce).render(Object(M.jsx)(i.a.StrictMode,{children:Object(M.jsx)(oe,{})}))}},[[322,1,2]]]);
//# sourceMappingURL=main.fcb24f9c.chunk.js.map