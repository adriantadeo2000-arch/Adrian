window.onload = function (){
    const btnBuscar = document.getElementById('btn-buscar');
    const searchBox = document.getElementById('search-box');
    const searchInput = document.getElementById('search-input');
    const resultados = document.getElementById('resultados');
    
    const productos = [
        { nombre: "Nike Dunk Low Panda", img: "../IMG/PNG/HOMBRE/Casuales/NIKE_DUNK_LOW_PANDA-removebg-preview.png", link: "ZAPATOS/producto1.html" },
        { nombre: "Adidas Campus", img: "../IMG/PNG/HOMBRE/Casuales/ADIDAS_ORIGINAL_CAMPUS_00S-removebg-preview.png", link: "ZAPATOS/producto2.html" },
        { nombre: "Air Jordan 4 retro military blue", img: "../IMG/PNG/HOMBRE/Casuales/AIR_JORDAN_4_RETRO_MILITARY_BLUE-removebg-preview.png", link: "ZAPATOS/producto3.html" },
        { nombre: "Jordan 1 retro high chicago", img: "../IMG/PNG/HOMBRE/Casuales/AIR_JORDAN_1_RETRO_HIGH_CHICAGO-removebg-preview.png", link: "ZAPATOS/producto4.html" },
        { nombre: "Air Jordan 4 retro miitary black", img: "../IMG/PNG/HOMBRE/Casuales/AIR_JORDAN_4_RETRO_MILITARY_BLACK-removebg-preview.png", link: "ZAPATOS/producto5.html" },
        { nombre: "Adidas Samba", img: "../IMG/PNG/MUJER/Casuales/ADIDAS_ZAMBA_ROSADO-removebg-preview.png", link: "ZAPATOS/producto6.html" },
        { nombre: "Air Jordan 5 Retro Lucky", img: "../IMG/PNG/HOMBRE/Casuales/AIR_JORDAN_5_RETRO_LUCKY_GREEN-removebg-preview.png", link: "ZAPATOS/producto7.html" },
        { nombre: "Adidas Campus 00s", img: "../IMG/PNG/HOMBRE/Casuales/CAMPUS_00S-removebg-preview.png", link: "ZAPATOS/producto8.html" },
        { nombre: "Converse Chuck Taylor All Star Lift", img: "../IMG/PNG/MUJER/Casuales/CONVERSE_CHUCK_TAYLOR_ALL_STAR_LIFT_PLATFORM_HIGH_TOP-removebg-preview.png", link: "ZAPATOS/producto9.html" },
        { nombre: "Jordan 1 x J Balvin", img: "../IMG/PNG/HOMBRE/Casuales/JORDAN_1_J_BALVIN-removebg-preview.png", link: "ZAPATOS/producto10.html" },
        { nombre: "Jordan 3 Retro Hall Of Fame", img: "../IMG/PNG/HOMBRE/Casuales/JORDAN_3_RETRO_HALL_OF_FAME-removebg-preview.png", link: "ZAPATOS/producto11.html" },
        { nombre: "LV Skate Sneaker", img: "../IMG/PNG/HOMBRE/Casuales/LV_SKATE_SNEAKER-removebg-preview.png", link: "ZAPATOS/producto12.html" },
        { nombre: "LV Trainer", img: "../IMG/PNG/HOMBRE/Casuales/LV_TRAINER-removebg-preview.png", link: "ZAPATOS/producto13.html" },
        { nombre: "Air Force 1", img: "../IMG/PNG/MUJER/Casuales/NIKE_AIR_FORCE_ONE_ROSADO-removebg-preview.png", link: "ZAPATOS/producto14.html" },
        { nombre: "Nike Air Jordan 11 Retro Concord", img: "../IMG/PNG/HOMBRE/Casuales/NIKE_AIR_JORDAN_11_RETRO__CONCORD-removebg-preview.png", link: "ZAPATOS/producto15.html" },
        { nombre: "Nike Dunk", img: "../IMG/PNG/HOMBRE/Casuales/NIKE_DUNK_LOW-removebg-preview.png", link: "ZAPATOS/producto16.html" },
        { nombre: "Puma Speedcat", img: "../IMG/PNG/HOMBRE/Casuales/PUMA_SPEEDCAT-removebg-preview.png", link: "ZAPATOS/producto17.html" },
        { nombre: "Vans Knu Skool", img: "../IMG/PNG/HOMBRE/Casuales/VANS_KNU_SKOOL-removebg-preview.png", link: "ZAPATOS/producto18.html" },
        { nombre: "Adidas Ultraboost 1.0", img: "../IMG/PNG/HOMBRE/Tenis/Adidas_Ultraboost_1.0_Blue-removebg-preview.png", link: "ZAPATOS/producto19.html" },
        { nombre: "ASICS Gel Nimbus 25", img: "../IMG/PNG/HOMBRE/Tenis/ASICS_GEL-Nimbus_25_black-removebg-preview.png", link: "ZAPATOS/producto20.html" },
        { nombre: "Hoka Clifton 10", img: "../IMG/PNG/HOMBRE/Tenis/Hoka_Clifton-removebg-preview.png", link: "ZAPATOS/producto21.html" },
        { nombre: "Nike Air Zoom Pegasus 39", img: "../IMG/PNG/HOMBRE/Tenis/Nike_Air_Zoom_Pegasus_39-removebg-preview.png", link: "ZAPATOS/poducto22.html" },
        { nombre: "Derby Clarks Tilden Cap", img: "../IMG/PNG/HOMBRE/Formales/Derby_Clarks_Tilden_Cap-removebg-preview.png", link: "ZAPATOS/producto23.html" },
        { nombre: "Loafer Cole Haan Pinch Penny", img: "../IMG/PNG/HOMBRE/Formales/Loafer_Cole_Haan_Pinch_Penny-removebg-preview.png", link: "ZAPATOS/producto24.html" },
        { nombre: "Magnanni Double Monk Strap", img: "../IMG/PNG/HOMBRE/Formales/Magnanni_Double_Monk_Strap-removebg-preview.png", link: "ZAPATOS/producto25.html" },
        { nombre: "Oxford Allen Edmonds Park Avenue", img: "../IMG/PNG/HOMBRE/Formales/Oxford_Allen_Edmonds_Park_Avenue-removebg-preview.png", link: "ZAPATOS/´producto26.html" },
        { nombre: "Trhusday Boot Company Cavalier Chelsea Boot", img: "../IMG/PNG/HOMBRE/Formales/Thrusday_Boot_Company_Cavalier_Chelsea_Boot-removebg-preview.png", link: "ZAPATOS/producto27.html" },
        { nombre: "Adidas Campus 00s", img: "../IMG/PNG/MUJER/Casuales/Adidas_Campus_00s_Morado-removebg-preview.png", link: "ZAPATOS/producto28.html" },
        { nombre: "Adidas Gazelle", img: "../IMG/PNG/MUJER/Casuales/Adidas_Gazelle-removebg-preview.png", link: "ZAPATOS/producto29.html" },
        { nombre: "Adidas Handbal Spezial", img: "../IMG/PNG/MUJER/Casuales/Adidas_Handball_Spezial-removebg-preview (1).png", link: "ZAPATOS/producto30.html" },
        { nombre: "Adidas Samba OG", img: "../IMG/PNG/MUJER/Casuales/Adidas_Samba_OG-removebg-preview.png", link: "ZAPATOS/producto31.html" },
        { nombre: "ASICS Gel Kayano 14", img: "../IMG/PNG/MUJER/Casuales/Asics_Gel_Kayano_14_Gris-removebg-preview.png", link: "ZAPATOS/producto32.html" },
        { nombre: "Adidas Ultraboost 5", img: "../IMG/PNG/MUJER/tenis/Adidas_Ultraboost_5-removebg-preview (1).png", link: "ZAPATOS/producto33.html" },
        { nombre: "ASICS Gel Nimbus 27", img: "../IMG/PNG/MUJER/tenis/Asics_Gel_Nimbus_27-removebg-preview.png", link: "ZAPATOS/producto34.html" },
        { nombre: "Hoka Clifton 10", img: "../IMG/PNG/MUJER/tenis/Hoka_Clifton_10-removebg-preview.png", link: "ZAPATOS/producto35.html" },
        { nombre: "New Balance Fresh Foam X 1080 v14", img: "../IMG/PNG/MUJER/tenis/New_Balance_Fresh_Foam_x_1080_v14-removebg-preview (1).png", link: "ZAPATOS/producto36.html" },
        { nombre: "Air Zoom Pegasus 41", img: "../IMG/PNG/MUJER/tenis/Nike_Air_Zoom_Pegasus_41_Rosa-removebg-preview.png", link: "ZAPATOS/producto37.html" },
        { nombre: "Clarks Sheer Court", img: "../IMG/PNG/MUJER/Formales/Clarks_Sheer_Court_Black-removebg-preview.png", link: "ZAPATOS/producto38.html" },
        { nombre: "Cole Haan Pinch Loafer", img: "../IMG/PNG/MUJER/Formales/Cole_Haan_Pinch_Penny_Loafer-removebg-preview.png", link: "ZAPATOS/procucto39.html" },
        { nombre: "Michael Kors Dorothy Flex Pump Beige", img: "../IMG/PNG/MUJER/Formales/Michael_Kors_Dorothy_Flex_Pump_Beige-removebg-preview.png", link: "ZAPATOS/producto40.html" },
        { nombre: "Sam Edelman Felicia Ballet Flat", img: "../IMG/PNG/MUJER/Formales/Sam_Edelman_Felicia_Ballet_Flat_Black-removebg-preview.png", link: "ZAPATOS/prodecto41.html" },
        { nombre: "Sam Edelman Hazel Pump", img: "../IMG/PNG/MUJER/Formales/Sam_Edelman_Hazel_Pump-removebg-preview.png", link: "ZAPATOS/producto42.html" },
        { nombre: "New Balance 530", img: "../IMG/PNG/MUJER/Casuales/New_Balance_530_Rosa-removebg-preview.png", link: "ZAPATOS/producto43.html" },
        { nombre: "New Balance 550", img: "../IMG/PNG/MUJER/Casuales/New_Balance_550_Rosa-removebg-preview.png", link: "ZAPATOS/producto44.html" },
        { nombre: "Nike Air Force 1 Low", img: "../IMG/PNG/MUJER/Casuales/Nike_Air_Force_1_Low-removebg-preview.png", link: "ZAPATOS/producto45.html" },
        { nombre: "Nike Blazer Mid'77", img: "../IMG/PNG/MUJER/Casuales/Nike_Blazer_Mid_77-removebg-preview.png", link: "ZAPATOS/producto46.html" },
        { nombre: "Nike Cortez", img: "../IMG/PNG/MUJER/Casuales/Nike_Cortez_Rosa-removebg-preview.png", link: "ZAPATOS/producto47.html" },
        { nombre: "On Cloud 5", img: "../IMG/PNG/MUJER/Casuales/On_Cloud_5-removebg-preview (1).png", link: "ZAPATOS/producto48.html" },
        { nombre: "Puma Palermo", img: "../IMG/PNG/MUJER/Casuales/Puma_Palermo_Beige-removebg-preview.png", link: "ZAPATOS/producto49.html" },
        { nombre: "Puma Suede Classic", img: "../IMG/PNG/MUJER/Casuales/Puma_Suede_Classic-removebg-preview.png", link: "ZAPATOS/producto50.html" },
        { nombre: "Adidas Campus 00s", img: "./IMG/PNG/HOMBRE/Casuales/Adidas_Campus_00s-removebg-preview.png", link: "ZAPATOS/producto51.html" },
        { nombre: "Adidas Forum Low", img: "../IMG/PNG/HOMBRE/Casuales/Adidas_Forum_Low-removebg-preview-removebg-preview.png", link: "ZAPATOS/producto52.html" },
        { nombre: "Adidas Handball Spezial", img: "../IMG/PNG/HOMBRE/Casuales/Adidas_Handball_Spezial-removebg-preview.png", link: "ZAPATOS/producto53.html" },
        { nombre: "Adidas Samba OG", img: "../IMG/PNG/HOMBRE/Casuales/Adidas_Samba_OG_Blanco-Cafe-removebg-preview.png", link: "ZAPATOS/producto54.html" },
        { nombre: "ASICS Gel Kayano 14", img: "../IMG/PNG/HOMBRE/Casuales/Asics_Gel-Kayano_14_Blano-Negro-removebg-preview.png", link: "ZAPATOS/producto55.html" },
        { nombre: "Adidas Ultraboost 5", img: "../IMG/PNG/HOMBRE/Tenis/Adidas_Ultraboost_5-removebg-preview.png", link: "ZAPATOS/producto56.html" },
        { nombre: "ASICS Gel Nimbus 27", img: "../IMG/PNG/HOMBRE/Tenis/ASICS_Gel-Nimbus_27-removebg-preview.png", link: "ZAPATOS/producto57.html" },
        { nombre: "Nike Vomero 18", img: "../IMG/PNG/HOMBRE/Tenis/Nike_Vomero_18-removebg-preview.png", link: "ZAPATOS/producto58.html" },
        { nombre: "New Balance Fresh Foam X 1080 V14", img: "../IMG/PNG/HOMBRE/Tenis/New_Balance_Fresh_Foam_X_1080_v14-removebg-preview.png", link: "ZAPATOS/producto59.html" },
        { nombre: "New Balance 327", img: "../IMG/PNG/MUJER/Casuales/New_Balance_327_White-removebg-preview.png", link: "ZAPATOS/producto86.html" },
        { nombre: "Nike Air Zoom Pegasus 41", img: "../IMG/PNG/HOMBRE/Tenis/Nike_Air_Zoom_Pegasus_41-removebg-preview.png", link: "ZAPATOS/producto60.html" },
        { nombre: "BOSS Colby Leather Oxford", img: "../IMG/PNG/HOMBRE/Formales/BOSS_Colby_Leather_Oxford-removebg-preview.png", link: "ZAPATOS/producto61.html" },
        { nombre: "Cole Haan Original Grand Wingtip Oxford", img: "../IMG/PNG/HOMBRE/Formales/Cole_Haan_Original_Grand_Wingtip_Oxford-removebg-preview.png", link: "ZAPATOS/producto62.html" },
        { nombre: "ECCO Melbourne Cap Toe Tie", img: "../IMG/PNG/HOMBRE/Formales/ECCO_Melbourne_Cap_Toe_Tie_Brown-removebg-preview-removebg-preview.png", link: "ZAPATOS/producto63.html" },
        { nombre: "Florsheim Lexington Cap Toe Oxford", img: "../IMG/PNG/HOMBRE/Formales/Florsheim_Lexington_Cap_Toe_Oxford-removebg-preview.png", link: "ZAPATOS/producto64.html" },
        { nombre: "Jhonston & Murphy Melton Cap Toe Tie", img: "../IMG/PNG/HOMBRE/Formales/Jhonston___Murphy_Melton_Cap_Toe_Tie-removebg-preview.png", link: "ZAPATOS/producto65.html" },
        { nombre: "Nike Air Force 1 Shadow", img: "../IMG/PNG/MUJER/Casuales/Nike_Air_force_1_Shadow-removebg-preview.png", link: "ZAPATOS/producto66.html" },
        { nombre: "Adidas Gazelle Bold", img: "../IMG/PNG/MUJER/Casuales/Adidas_Gazelle_Bold-removebg-preview.png", link: "ZAPATOS/producto67.html" },
        { nombre: "New Balance 574", img: "../IMG/PNG/MUJER/Casuales/New_Balance_574-removebg-preview.png", link: "ZAPATOS/producto68.html" },
        { nombre: "Puma Cali Dream", img: "../IMG/PNG/MUJER/Casuales/Puma_Cali_Dream-removebg-preview.png", link: "ZAPATOS/producto69.html" },
        { nombre: "Reebok Club C Double", img: "../IMG/PNG/MUJER/Casuales/Reebok_Club_C_Double-removebg-preview.png", link: "ZAPATOS/producto70.html" },
        { nombre: "Adidas Ultraboost Light", img: "../IMG/PNG/MUJER/tenis/Adidas_Ultraboost_Light-removebg-preview.png", link: "ZAPATOS/producto71.html" },
        { nombre: "ASICS Novablast 4", img: "../IMG/PNG/MUJER/tenis/ASICS_Novablast_4-removebg-preview.png", link: "ZAPATOS/producto72.html" },
        { nombre: "Brook Ghost 16", img: "../IMG/PNG/MUJER/tenis/Brooks_Ghost_16-removebg-preview.png", link: "ZAPATOS/producto73.html" },
        { nombre: "Hoka Bondi 8", img: "../IMG/PNG/MUJER/tenis/Hoka_Bondi_8-removebg-preview.png", link: "ZAPATOS/producto74.html" },
        { nombre: "Nike ZoomX Invincible Run Flyknit 3", img: "../IMG/PNG/MUJER/tenis/Nike_ZoomX_Invincible_Run_Flyknit_3-removebg-preview.png", link: "ZAPATOS/producto75.html" },
        { nombre: "ALDO Stessy 2.0", img: "../IMG/PNG/MUJER/Formales/ALDO_Stessy_2.0-removebg-preview.png", link: "ZAPATOS/producto76.html" },
        { nombre: "Calvin Klein Gayle Pump", img: "../IMG/PNG/MUJER/Formales/Calvin_Klein_Gayle_Pump-removebg-preview.png", link: "ZAPATOS/producto77.html" },
        { nombre: "Naturalizer Banks Pump", img: "../IMG/PNG/MUJER/Formales/Naturalizer_Banks_Pump-removebg-preview.png", link: "ZAPATOS/producto78.html" },
        { nombre: "Steve Madden Daisie Pump", img: "../IMG/PNG/MUJER/Formales/Steve_Madden_Daisie_Pump-removebg-preview.png", link: "ZAPATOS/producto79.html" },
        { nombre: "Nine West Tatiana Pump", img: "../IMG/PNG/MUJER/Formales/Nine_West_Tatiana_Pump-removebg-preview.png", link: "ZAPATOS/producto80.html" },
        { nombre: "Nike Air Force Low 1", img: "../IMG/PNG/HOMBRE/Casuales/Nike_Air_Force_Low_1_blanco-removebg-preview.png", link: "ZAPATOS/producto81.html" },
        { nombre: "New Balance 550", img: "../IMG/PNG/HOMBRE/Casuales/New_Balance_550_Blanco-Rojo-removebg-preview.png", link: "ZAPATOS/producto82.html" },
        { nombre: "Vans Old Skool", img: "../IMG/PNG/HOMBRE/Casuales/Vans_Old_Skool-removebg-preview.png", link: "ZAPATOS/producto83.html" },
        { nombre: "Puma Palermo", img: "../IMG/PNG/HOMBRE/Casuales/Puma_Palermo-removebg-preview.png", link: "ZAPATOS/producto84.html" },
        { nombre: "Puma Sede Classic", img: "../IMG/PNG/HOMBRE/Casuales/Puma_Sede_Classic-removebg-preview.png", link: "ZAPATOS/producto85.html" },
        { nombre: "Adidas Forum Low", img: "../IMG/PNG/MUJER/Casuales/Adidas_Forum_Low-removebg-preview (1).png", link: "ZAPATOS/producto87.html" },
        { nombre: "Nike Blazer Low'77", img: "../IMG/PNG/MUJER/Casuales/Nike_Blazer_Low_77-removebg-preview.png", link: "ZAPATOS/producto88.html" },
        { nombre: "ASICS Japan S", img: "../IMG/PNG/MUJER/Casuales/ASICS_Japan_S-removebg-preview.png", link: "ZAPATOS/producto89.html" },
        { nombre: "Veja Campo", img: "../IMG/PNG/MUJER/Casuales/Veja_Campo-removebg-preview.png", link: "ZAPATOS/producto90.html" },
        { nombre: "Reebok Club C 85", img: "../IMG/PNG/HOMBRE/Casuales/Reebok_Club_C_85-removebg-preview.png", link: "ZAPATOS/producto91.html" },
        { nombre: "Nike Blazer Mid'77 Vintage", img: "../IMG/PNG/HOMBRE/Casuales/Nike_Blaizer_Mid_77_Vintage-removebg-preview.png", link: "ZAPATOS/producto92.html" },
        { nombre: "New Balance 530", img: "../IMG/PNG/HOMBRE/Casuales/New_Balance_530-removebg-preview.png", link: "ZAPATOS/producto93.html" },
        { nombre: "Nike Cortez", img: "../IMG/PNG/HOMBRE/Casuales/Nike_Cortez-removebg-preview.png", link: "ZAPATOS/producto94.html" },
        { nombre: "On Cloud 5", img: "../IMG/PNG/HOMBRE/Casuales/On_cloud_5-removebg-preview.png", link: "ZAPATOS/producto95.html" },
        { nombre: "Vans Slip-On", img: "../IMG/PNG/MUJER/Casuales/Vans_Slip-On-removebg-preview.png", link: "ZAPATOS/producto96.html" },
        { nombre: "TOMS Alpargata", img: "../IMG/PNG/MUJER/Casuales/TOMS_Alpargata-removebg-preview.png", link: "ZAPATOS/producto97.html" },
        { nombre: "Birkenstock Boston", img: "../IMG/PNG/MUJER/Casuales/Birkenstock_Boston-removebg-preview.png", link: "ZAPATOS/prodcuto99.html" },
        { nombre: "Skechers Uno-Stand on Air", img: "../IMG/PNG/MUJER/Casuales/Skechers_Uno-Stand_on_Air-removebg-preview.png", link: "ZAPATOS/producto98.html" },
        { nombre: "Dr.Martens 1461", img: "../IMG/PNG/MUJER/Casuales/Dr.Martens_1461_Black-removebg-preview.png", link: "ZAPATOS/producto100.html" }
    ];
    
    btnBuscar.addEventListener('click', function (e) {
        e.preventDefault();
        searchBox.classList.toggle('activo');

            if (!searchBox.classList.contains('activo')) {
            resultados.classList.remove('mostrar');
            resultados.innerHTML = '';
            searchInput.value = '';
        } else {
            searchInput.focus();
        }
    });

    searchInput.addEventListener('input', function () {
        const texto = searchInput.value.toLowerCase().trim();

        if (texto === '') {
            resultados.classList.remove('mostrar');
            resultados.innerHTML = '';
            return;
        }

        const filtrados = productos.filter(function (p) {
            return p.nombre.toLowerCase().includes(texto);
        });

        if (filtrados.length === 0) {
            resultados.innerHTML = '<div class="resultado-item">Sin resultados</div>';
        } else {
            resultados.innerHTML = filtrados.map(function (p) {
                return '<a href="' + p.link + '" class="resultado-item">' +
                            '<img src="' + p.img + '" alt="' + p.nombre + '">' +
                            '<span>' + p.nombre + '</span>' +
                        '</a>';
            }).join('');
        }

        resultados.classList.add('mostrar');
    });

    document.addEventListener('click', function (e) {
        const esClicDentro = searchBox.contains(e.target) || btnBuscar.contains(e.target);

        if (!esClicDentro && searchBox.classList.contains('activo')) {
            searchBox.classList.remove('activo');
            resultados.classList.remove('mostrar');
            resultados.innerHTML = '';
            searchInput.value = '';
        }
    });

}

