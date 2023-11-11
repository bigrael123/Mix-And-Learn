function Activateselect2(){
    elt = document.getElementById("ingrediente1")
    selectedtext = elt.options[elt.selectedIndex].text
    removeOptions(document.getElementById("ingrediente2"));
    if(selectedtext == ""){
        document.getElementById("ingrediente2").setAttribute("disabled","")
    }
    if(selectedtext == "Amaciante"){
        
        document.getElementById("ingrediente2").removeAttribute("disabled")
        select =  document.getElementById("ingrediente2")
        option0 = document.createElement("option")
         option0.text = " "
         select.add(option0)
         option = document.createElement("option")
         option.text = "Vanish"
         select.add(option)
     }
     if(selectedtext == "Limpa Pedra"){
        
        document.getElementById("ingrediente2").removeAttribute("disabled")
        select =  document.getElementById("ingrediente2")
        option0 = document.createElement("option")
         option0.text = " "
         select.add(option0)
         option = document.createElement("option")
         option.text = "Cloro"
         select.add(option)
     }
     if(selectedtext == "Cloro"){
        
        document.getElementById("ingrediente2").removeAttribute("disabled")
        select =  document.getElementById("ingrediente2")
        option0 = document.createElement("option")
         option0.text = " "
         select.add(option0)
         option = document.createElement("option")
         option.text = "Limpa Pedra"
         select.add(option)
     }
     if(selectedtext == "Vanish"){
        
        document.getElementById("ingrediente2").removeAttribute("disabled")
        select =  document.getElementById("ingrediente2")
        option0 = document.createElement("option")
         option0.text = " "
         select.add(option0)
         option = document.createElement("option")
         option.text = "Amaciante"
         select.add(option)
     }
    if(selectedtext == "Bicarbonato de Sódio"){
        
       document.getElementById("ingrediente2").removeAttribute("disabled")
       select =  document.getElementById("ingrediente2")
       option0 = document.createElement("option")
        option0.text = " "
        select.add(option0)
        option4 = document.createElement("option")
        option4.text = "Cloro em GeL"
        select.add(option4)
        option5 = document.createElement("option")
        option5.text = "Detergente"
        select.add(option5)
        option3 = document.createElement("option")
        option3.text = "Pasta de Dente"
        select.add(option3)
        option2 = document.createElement("option")
        option2.text = "Limão"
        select.add(option2)
        option = document.createElement("option")
        option.text = "Vinagre"
        select.add(option)
        
    }
    if(selectedtext == "Pasta de Dente"){
        
        document.getElementById("ingrediente2").removeAttribute("disabled")
        select =  document.getElementById("ingrediente2")
        option0 = document.createElement("option")
         option0.text = " "
         select.add(option0)
         option = document.createElement("option")
         option.text = "Bicarbonato de Sódio"
         select.add(option)
     }
     if(selectedtext == "Cloro em GeL"){
        
        document.getElementById("ingrediente2").removeAttribute("disabled")
        select =  document.getElementById("ingrediente2")
        option0 = document.createElement("option")
         option0.text = " "
         select.add(option0)
         option = document.createElement("option")
         option.text = "Bicarbonato de Sódio"
         select.add(option)
     }
    if(selectedtext == "Limão"){
        
        document.getElementById("ingrediente2").removeAttribute("disabled")
        select =  document.getElementById("ingrediente2")
        option0 = document.createElement("option")
         option0.text = " "
         select.add(option0)
         option = document.createElement("option")
         option.text = "Bicarbonato de Sódio"
         select.add(option)
     }
    if(selectedtext == "Vinagre"){
    
        
        document.getElementById("ingrediente2").removeAttribute("disabled")
        select =  document.getElementById("ingrediente2")
        option0 = document.createElement("option")
         option0.text = " "
         select.add(option0)
         option4 = document.createElement("option")
         option4.text = "Alvejante (Cloro)"
         select.add(option4)
         option2 = document.createElement("option")
         option2.text = "Água Oxigenada"
         select.add(option2)
         option3 = document.createElement("option")
         option3.text = "Água Sanitária"
         select.add(option3)
         option = document.createElement("option")
         option.text = "Bicarbonato de Sódio"
         select.add(option)
         
     }
     if(selectedtext == "Água Oxigenada"){
    
        
    document.getElementById("ingrediente2").removeAttribute("disabled")
    select =  document.getElementById("ingrediente2")
    option0 = document.createElement("option")
     option0.text = " "
     select.add(option0)
     option2 = document.createElement("option")
     option2.text = "Álcool"
     select.add(option2)
     option = document.createElement("option")
     option.text = "Vinagre"
     select.add(option)
 }
     if(selectedtext == "Limpa Forno"){
        
        document.getElementById("ingrediente2").removeAttribute("disabled")
        select =  document.getElementById("ingrediente2")
        option0 = document.createElement("option")
         option0.text = " "
         select.add(option0)
         option = document.createElement("option")
         option.text = "Detergente"
         select.add(option)
         option2 = document.createElement("option")
         option2.text = "Multiuso"
         select.add(option2)
     }
     if(selectedtext == "Detergente"){
        
        document.getElementById("ingrediente2").removeAttribute("disabled")
        select =  document.getElementById("ingrediente2")
        option0 = document.createElement("option")
         option0.text = " "
         select.add(option0)
         option2 = document.createElement("option")
         option2.text = "Água Sanitária"
         select.add(option2)
         option5 = document.createElement("option")
         option5.text = "Bicarbonato de Sódio"
         select.add(option5)
         option3 = document.createElement("option")
         option3.text = "Desentupidores de Pia"
         select.add(option3)
         option4 = document.createElement("option")
         option4.text = "Limpa Alumínio"
         select.add(option4) 
         option = document.createElement("option")
         option.text = "Limpa Forno"
         select.add(option)  
         option7 = document.createElement("option")
         option7.text = "Multiuso"
         select.add(option7)
         option6 = document.createElement("option")
         option6.text = "Querosene"
         select.add(option6)
         option8 = document.createElement("option")
         option8.text = "Sabão em Pó"
         select.add(option8)
     }
     if(selectedtext == "Querosene"){
        
        document.getElementById("ingrediente2").removeAttribute("disabled")
        select =  document.getElementById("ingrediente2")
        option0 = document.createElement("option")
         option0.text = " "
         select.add(option0)
         option2 = document.createElement("option")
         option2.text = "Água Sanitária"
         select.add(option2)
         option = document.createElement("option")
         option.text = "Detergente"
         select.add(option)
     }
     if(selectedtext == "Limpa Alumínio"){
        
        document.getElementById("ingrediente2").removeAttribute("disabled")
        select =  document.getElementById("ingrediente2")
        option0 = document.createElement("option")
         option0.text = " "
         select.add(option0)
         option = document.createElement("option")
         option.text = "Detergente"
         select.add(option)
     }
     if(selectedtext == "Desentupidores de Pia"){
        
        document.getElementById("ingrediente2").removeAttribute("disabled")
        select =  document.getElementById("ingrediente2")
        option0 = document.createElement("option")
         option0.text = " "
         select.add(option0)
         option = document.createElement("option")
         option.text = "Detergente"
         select.add(option)  
     }
     if(selectedtext == "Multiuso"){
        
        document.getElementById("ingrediente2").removeAttribute("disabled")
        select =  document.getElementById("ingrediente2")
        option0 = document.createElement("option")
         option0.text = " "
         select.add(option0)
         option2 = document.createElement("option")
         option2.text = "Detergente"
         select.add(option2)
         option = document.createElement("option")
         option.text = "Limpa Forno"
         select.add(option)
     }
     if(selectedtext == "Lustra Móveis"){
        
        document.getElementById("ingrediente2").removeAttribute("disabled")
        select =  document.getElementById("ingrediente2")
        option0 = document.createElement("option")
         option0.text = " "
         select.add(option0)
         option = document.createElement("option")
         option.text = "Água Sanitária"
         select.add(option)
     }
     if(selectedtext == "Água Sanitária"){
        document.getElementById("ingrediente2").removeAttribute("disabled")
        select =  document.getElementById("ingrediente2")
        option0 = document.createElement("option")
         option0.text = " "
         select.add(option0)
         option4 = document.createElement("option")
         option4.text = "Ácido Muriático"
         select.add(option4)
         option3 = document.createElement("option")
         option3.text = "Amônia"
         select.add(option3) 
         option8 = document.createElement("option")
        option8.text = "Álcool"
        select.add(option8)
        option9 = document.createElement("option")
        option9.text = "Álcool em Gel"
        select.add(option9)
        option6 = document.createElement("option")
         option6.text = "Desengordurante"
         select.add(option6)  
         option5 = document.createElement("option")
         option5.text = "Detergente"
         select.add(option5)
         option2 = document.createElement("option")
         option2.text = "Lisoform"
         select.add(option2)
         option = document.createElement("option")
         option.text = "Lustra Móveis"
         select.add(option)
         option11 = document.createElement("option")
         option11.text = "Querosene"
         select.add(option11)
         option10 = document.createElement("option")
        option10.text = "Sabão em Pó"
        select.add(option10)
         option7 = document.createElement("option")
        option7.text = "Vinagre"
        select.add(option7)
        
        
        
     }
     if(selectedtext == "Sabão em Pó"){
        document.getElementById("ingrediente2").removeAttribute("disabled")
        select =  document.getElementById("ingrediente2")
        option0 = document.createElement("option")
         option0.text = " "
         select.add(option0)
         option = document.createElement("option")
         option.text = "Água Sanitária"
         select.add(option)
         option2 = document.createElement("option")
         option2.text = "Detergente"
         select.add(option2)
     }
     if(selectedtext == "Álcool em Gel"){              
        document.getElementById("ingrediente2").removeAttribute("disabled")
        select =  document.getElementById("ingrediente2")
        option0 = document.createElement("option")
         option0.text = " "
         select.add(option0)
         option = document.createElement("option")
         option.text = "Água Sanitária"
         select.add(option)
     }
     if(selectedtext == "Desengordurante"){              
        document.getElementById("ingrediente2").removeAttribute("disabled")
        select =  document.getElementById("ingrediente2")
        option0 = document.createElement("option")
         option0.text = " "
         select.add(option0)
         option = document.createElement("option")
         option.text = "Água Sanitária"
         select.add(option)
         option2 = document.createElement("option")
         option2.text = "Álcool"
         select.add(option2)
     }
     if(selectedtext == "Álcool"){              
        document.getElementById("ingrediente2").removeAttribute("disabled")
        select =  document.getElementById("ingrediente2")
        option0 = document.createElement("option")
         option0.text = " "
         select.add(option0)
         option4 = document.createElement("option")
         option4.text = "Água Sanitária"
         select.add(option4)
         option2 = document.createElement("option")
         option2.text = "Água Oxigenada"
         select.add(option2)
         option = document.createElement("option")
         option.text = "Desengordurante"
         select.add(option)
         option3 = document.createElement("option")
         option3.text = "Desinfetante"
         select.add(option3)
        
         
     }
     if(selectedtext == "Desinfetante"){              
        document.getElementById("ingrediente2").removeAttribute("disabled")
        select =  document.getElementById("ingrediente2")
        option0 = document.createElement("option")
         option0.text = " "
         select.add(option0)
         option = document.createElement("option")
         option.text = "Álcool"
         select.add(option)
         option2 = document.createElement("option")
         option2.text = "Limpa Vidros"
         select.add(option2)
         
     }
     if(selectedtext == "Limpa Vidros"){              
        document.getElementById("ingrediente2").removeAttribute("disabled")
        select =  document.getElementById("ingrediente2")
        option0 = document.createElement("option")
         option0.text = " "
         select.add(option0)
         option = document.createElement("option")
         option.text = "Desinfetante"
         select.add(option)
         
     }
     if(selectedtext == "Ácido Muriático"){              
        document.getElementById("ingrediente2").removeAttribute("disabled")
        select =  document.getElementById("ingrediente2")
        option0 = document.createElement("option")
         option0.text = " "
         select.add(option0)
         option = document.createElement("option")
         option.text = "Água Sanitária"
         select.add(option)
     }
     if(selectedtext == "Amônia"){
        
        document.getElementById("ingrediente2").removeAttribute("disabled")
        select =  document.getElementById("ingrediente2")
        option0 = document.createElement("option")
         option0.text = " "
         select.add(option0)
         option = document.createElement("option")
         option.text = "Água Sanitária"
         select.add(option)
         option2 = document.createElement("option")
         option2.text = "Alvejante (Cloro)"
         select.add(option2)
     }
     
     if(selectedtext == "Alvejante (Cloro)"){
        
        document.getElementById("ingrediente2").removeAttribute("disabled")
        select =  document.getElementById("ingrediente2")
        option0 = document.createElement("option")
         option0.text = " "
         select.add(option0)
         option = document.createElement("option")
         option.text = "Amônia"
         select.add(option)  
         option2 = document.createElement("option")
         option2.text = "Desinfetante (Base de Amônia)"
         select.add(option2)
         option3 = document.createElement("option")
         option3.text = "Vinagre"
         select.add(option3)
     }
     if(selectedtext == "Desinfetante (Base de Amônia)"){
        
        document.getElementById("ingrediente2").removeAttribute("disabled")
        select =  document.getElementById("ingrediente2")
        option0 = document.createElement("option")
         option0.text = " "
         select.add(option0)
         option = document.createElement("option")
         option.text = "Alvejante (Cloro)"
         select.add(option)
     }
     if(selectedtext == "Lisoform"){
        
        document.getElementById("ingrediente2").removeAttribute("disabled")
        select =  document.getElementById("ingrediente2")
        option0 = document.createElement("option")
         option0.text = " "
         select.add(option0)
         option = document.createElement("option")
         option.text = "Água Sanitária"
         select.add(option)
     }
    }
function removeOptions(selectElement) {
    var i, L = selectElement.options.length - 1;
    for(i = L; i >= 0; i--) {
        selectElement.remove(i);
}
}
function Misturar(){
   
        elt =document.getElementById("ingrediente1")
        selectedtext = elt.options[elt.selectedIndex].text
        ig2 =document.getElementById("ingrediente2")
        selectedtext2 = ig2.options[ig2.selectedIndex].text
        Result = document.getElementById("ResultHolder")
        if(!elt.options[elt.selectedIndex].text == ""){
            Result.style.display = "block"
        }
        if((selectedtext2 == "Vinagre" && selectedtext == "Bicarbonato de Sódio" )|| (selectedtext2 == "Bicarbonato de Sódio" && selectedtext == "Vinagre" )){  
            document.getElementById("ResultTitle").innerHTML = "BICARBONATO DE SÓDIO + VINAGRE:"
            document.getElementById("Result").innerHTML = "Reação: A combinação de bicarbonato de sódio e vinagre resulta em uma efervescência devido à liberação de dióxido de carbono. <br><br>Usos Comuns:<br><br>· Desobstrução de canos.<br>· Limpeza de superfícies.<br><br> Perigos: Esta mistura não apresenta perigos significativos quando usada para fins de limpeza.<br><br>Recomendações:<br><br>· Use em áreas bem ventiladas.<br>· Evite aplicar em superfícies sensíveis, como mármore ou granito, pois o vinagre pode causar corrosão. "
        }
        if((selectedtext2 == "Limão" && selectedtext == "Bicarbonato de Sódio") || (selectedtext2 == "Bicarbonato de Sódio" && selectedtext == "Limão") ){  
            document.getElementById("ResultTitle").innerHTML = "BICARBONATO DE SÓDIO + LIMÃO:"
            document.getElementById("Result").innerHTML = "Reação: Quando o bicarbonato de sódio e o limão entram em contato, ocorre uma reação efervescente devido à liberação de dióxido de carbono. <br><br>Usos Comuns:<br><br>· Limpeza de superfícies de cozinha.<br>· Desodorização de ambientes.<br>· Remoção de manchas leves.<br><br> Perigos: Não há perigos significativos associados a esta mistura quando utilizada para fins de limpeza.<br><br>Recomendações:<br><br>· Use a mistura em áreas bem ventiladas.<br>· Evite aplicar em superfícies sensíveis, como mármore ou granito, pois o limão pode causar corrosão. "
        }
        if((selectedtext2 == "Pasta de Dente" && selectedtext == "Bicarbonato de Sódio") || (selectedtext2 == "Bicarbonato de Sódio" && selectedtext == "Pasta de Dente") ){  
            document.getElementById("ResultTitle").innerHTML = "BICARBONATO DE SODIO + PASTA DE DENTE:"
            document.getElementById("Result").innerHTML = "Reação: A mistura de bicarbonato de sódio e pasta de dente resulta em uma combinação abrasiva que pode ser eficaz na remoção de manchas e na limpeza de superfícies. <br><br>Usos Comuns:<br><br>· Remoção de manchas em superfícies não sensíveis.<br>· Limpeza de azulejos e rejunte.<br><br> Perigos: Não há perigos significativos associados a esta mistura quando utilizada para fins de limpeza.<br><br>Recomendações:<br><br>· Use a mistura com moderação.<br> · Não aplique em superfícies sensíveis, pois pode ser abrasiva. "
        }
        if((selectedtext2 == "Cloro em GeL" && selectedtext == "Bicarbonato de Sódio") || (selectedtext2 == "Bicarbonato de Sódio" && selectedtext == "Cloro em GeL") ){  
            document.getElementById("ResultTitle").innerHTML = "CLORO EM GEL + BICARBONATO DE SODIO:"
            document.getElementById("Result").innerHTML = "Reação:A combinação de cloro em gel e bicarbonato de sódio pode resultar em uma reação efervescente, liberando dióxido de carbono. <br><br>Usos Comuns:<br><br>· Não é recomendado misturar cloro em gel com bicarbonato de sódio devido aos riscos associados.<br><br> Perigos:A reação pode gerar vapores irritantes e, em casos mais extremos, pode causar irritação nas vias respiratórias, olhos e pele.<br><br>Recomendações:<br><br>· Evite combinar cloro em gel com bicarbonato de sódio.<br>· Mantenha os dois produtos em locais separados."
        }
        if((selectedtext2 == "Detergente" && selectedtext == "Limpa Forno") || (selectedtext2 == "Limpa Forno" && selectedtext == "Detergente") ){  
            document.getElementById("ResultTitle").innerHTML = "LIMPA FORNO + DETERGENTE:"
            document.getElementById("Result").innerHTML = "Reação: A combinação de limpa forno e detergente não é recomendada, pois não resulta em uma reação química significativa. <br><br>Usos Comuns:<br><br>· Não é comum utilizar esses produtos em conjunto, pois cada um possui finalidades específicas.<br><br> Perigos: Embora a mistura não gere produtos químicos perigosos, ela pode ser ineficaz para as tarefas de limpeza desejadas.<br><br>Recomendações:<br><br>· Use a mistura em áreas bem ventiladas.<br>· Em vez de misturá-los, utilize cada produto separadamente, seguindo as instruções de uso do fabricante. "
        }
        if((selectedtext2 == "Multiuso" && selectedtext == "Limpa Forno") || (selectedtext2 == "Limpa Forno" && selectedtext == "Multiuso") ){  
            document.getElementById("ResultTitle").innerHTML = "LIMPA FORNO + MULTIUSO:"
            document.getElementById("Result").innerHTML = "Reação: A combinação de Limpa Forno e Multiuso não é recomendada, pois pode resultar em uma mistura de produtos químicos variados, o que pode ser perigoso. <br><br>Usos Comuns:<br><br>· Não é aconselhável fazer essa mistura devido ao risco associado.<br><br> Perigos: A reação entre esses produtos pode levar à liberação de vapores desconhecidos e potencialmente perigosos, o que pode resultar em irritação nas vias respiratórias, olhos e pele.<br><br>Recomendações:<br><br>· Evite combinar Limpa Forno com Multiuso.<br>· Mantenha os produtos em locais separados e use conforme as instruções no rótulo. "
        }
        if((selectedtext2 == "Água Sanitária" && selectedtext == "Lustra Móveis") || (selectedtext2 == "Lustra Móveis" && selectedtext == "Água Sanitária") ){  
            document.getElementById("ResultTitle").innerHTML = "LUSTRA MÓVEIS + ÁGUA SANITÁRIA:"
            document.getElementById("Result").innerHTML = "Reação: A combinação de lustra móveis e água sanitária pode resultar em uma mistura instável e potencialmente perigosa. <br><br>Usos Comuns:<br><br>· Não é recomendado combinar esses produtos devido aos riscos envolvidos.<br><br> Perigos: A reação entre lustra móveis e água sanitária pode produzir produtos químicos não identificados, os quais podem ser tóxicos ou corrosivos. Os vapores resultantes podem causar irritação nas vias respiratórias, olhos e pele.<br><br>Recomendações:<br><br>· Evite a combinação de lustra móveis com água sanitária.<br>· Mantenha os produtos em locais separados. "
        }
        if((selectedtext2 == "Água Sanitária" && selectedtext == "Lisoform") || (selectedtext2 == "Lisoform" && selectedtext == "Água Sanitária") ){  
            document.getElementById("ResultTitle").innerHTML = "LISOFORM + ÁGUA SANITÁRIA:"
            document.getElementById("Result").innerHTML = "Reação: A combinação de Lisoform e Água Sanitária pode resultar na formação de cloramina, um gás tóxico e irritante. <br><br>Usos Comuns:<br><br>· Não é recomendado combinar esses produtos devido aos riscos envolvidos.<br><br> Perigos: A mistura pode liberar vapores irritantes como a cloramina que causa irritação nas vias respiratórias, olhos e pele. A exposição prolongada ou em grandes quantidades pode levar a complicações respiratórias que vão desde irritações até queimaduras no seu sistema respiratório e intoxicações graves.<br><br>Recomendações:<br><br>· Evite a combinação de Lisoform com Água Sanitária<br>· Mantenha os dois produtos armazenados separadamente e em locais bem ventilados. "
        }
        if((selectedtext2 == "Amônia" && selectedtext == "Água Sanitária") || (selectedtext2 == "Água Sanitária" && selectedtext == "Amônia") ){  
            document.getElementById("ResultTitle").innerHTML = "ÁGUA SANITÁRIA + AMÔNIA:"
            document.getElementById("Result").innerHTML = "Reação:A combinação de água sanitária e amônia produz vapores tóxicos de cloramina. <br><br>Usos Comuns:<br><br>· Nenhum. Esta mistura não deve ser feita devido aos riscos associados.<br><br> Perigos:A mistura libera vapores tóxicos que podem causar irritação nas vias respiratórias, olhos e pele. Em casos graves, pode levar a complicações respiratórias.<br><br>Recomendações:<br><br>· Nunca misture água sanitária com amônia.<br>· Mantenha os dois produtos bem longe um do outro. "
        }
        if((selectedtext2 == "Ácido Muriático" && selectedtext == "Água Sanitária") || (selectedtext2 == "Água Sanitária" && selectedtext == "Ácido Muriático") ){  
            document.getElementById("ResultTitle").innerHTML = "ÁGUA SANITÁRIA + ÁCIDO MURIÁTICO:"
            document.getElementById("Result").innerHTML = "Reação:A combinação de água sanitária e ácido muriático pode produzir vapores corrosivos de gás cloro.<br><br>Usos Comuns:<br><br>· Não deve ser utilizada como mistura devido aos riscos envolvidos.<br><br> Perigos:A reação pode resultar em vapores corrosivos que causam irritação nas vias respiratórias, olhos e pele. Além disso, a exposição prolongada pode levar a danos pulmonares.<br><br>Recomendações:<br><br>· Evite combinar água sanitária com ácido muriático<br>· Mantenha os dois produtos em locais separados. "
        }
        if((selectedtext2 == "Alvejante (Cloro)" && selectedtext == "Amônia") || (selectedtext2 == "Amônia" && selectedtext == "Alvejante (Cloro)") ){  
            document.getElementById("ResultTitle").innerHTML = "ALVEJANTE (CLORO) + AMÔNIA:"
            document.getElementById("Result").innerHTML = "Reação:A combinação de alvejante à base de cloro e amônia pode produzir vapores tóxicos de cloramina.<br><br>Usos Comuns:<br><br>· Não deve ser utilizado como mistura devido aos riscos envolvidos.<br><br> Perigos:A reação pode resultar em vapores tóxicos que causam irritação nas vias respiratórias, olhos e pele. Em casos graves, pode levar a complicações respiratórias.<br><br>Recomendações:<br><br>· Nunca misture alvejante com amônia<br>· Mantenha os dois produtos em locais separados. "
        }
        if((selectedtext2 == "Alvejante (Cloro)" && selectedtext == "Desinfetante (Base de Amônia)") || (selectedtext2 == "Desinfetante (Base de Amônia)" && selectedtext == "Alvejante (Cloro)") ){  
            document.getElementById("ResultTitle").innerHTML = "DESINFETANTE (BASE DE AMÔNIA) + ALVEJANTE (CLORO):"
            document.getElementById("Result").innerHTML = "Reação:A combinação de desinfetante à base de amônia e alvejante à base de cloro pode produzir vapores de cloramina e ácido clorídrico.<br><br>Usos Comuns:<br><br>· Não deve ser utilizado como mistura devido aos riscos envolvidos.<br><br> Perigos:A reação pode resultar em vapores irritantes e corrosivos que causam irritação nas vias respiratórias, olhos e pele.<br><br>Recomendações:<br><br>· Evite combinar desinfetante à base de amônia com alvejante à base de cloro.<br>· Mantenha os dois produtos em locais separados. "
        }
        if((selectedtext2 == "Vinagre" && selectedtext == "Água Oxigenada") || (selectedtext2 == "Água Oxigenada" && selectedtext == "Vinagre") ){  
            document.getElementById("ResultTitle").innerHTML = "ÁGUA OXIGENADA + VINAGRE:"
            document.getElementById("Result").innerHTML = "Reação:A combinação de água oxigenada e vinagre pode produzir ácido peracético, que é corrosivo.<br><br>Usos Comuns:<br><br>· Não é recomendado misturar água oxigenada com vinagre devido aos riscos associados.<br><br> Perigos:A reação pode resultar em vapores corrosivos que causam irritação nas vias respiratórias, olhos e pele.<br><br>Recomendações:<br><br>· Evite combinar água oxigenada com vinagre.<br>· Mantenha os dois produtos em locais separados. "
        } 
        if((selectedtext2 == "Desengordurante" && selectedtext == "Água Sanitária") || (selectedtext2 == "Água Sanitária" && selectedtext == "Desengordurante") ){  
            document.getElementById("ResultTitle").innerHTML = "DESENGORDURANTE + ÁGUA SANITÁRIA:"
            document.getElementById("Result").innerHTML = "Reação:A combinação de desengordurante e água sanitária pode resultar na liberação de vapores tóxicos.<br><br>Usos Comuns:<br><br>· Não é recomendado misturar desengordurante com água sanitária devido aos riscos associados.<br><br> Perigos:A reação pode produzir vapores tóxicos que causam irritação nas vias respiratórias, olhos e pele.<br><br>Recomendações:<br><br>· Evite combinar desengordurante com água sanitária<br>· Mantenha os dois produtos em locais separados. "
        }
        if((selectedtext2 == "Água Sanitária" && selectedtext == "Detergente") || (selectedtext2 == "Detergente" && selectedtext == "Água Sanitária") ){  
            document.getElementById("ResultTitle").innerHTML = "DETERGENTE + ÁGUA SANITÁRIA:"
            document.getElementById("Result").innerHTML = "Reação:A combinação de detergente e água sanitária pode resultar em vapores de cloramina.<br><br>Usos Comuns:<br><br>·Não é recomendado misturar detergente com água sanitária devido aos riscos associados.<br><br> Perigos: A reação pode resultar em vapores tóxicos que causam irritação nas vias respiratórias, olhos e pele. A inalação pode causar irritação brônquica, dificuldade para respirar e edema pulmonar.<br><br>Recomendações:<br><br>· Evite combinar detergente com água sanitária.<br>· Mantenha os dois produtos em locais separados. "
        }
        if((selectedtext2 == "Álcool" && selectedtext == "Desengordurante") || (selectedtext2 == "Desengordurante" && selectedtext == "Álcool") ){  
            document.getElementById("ResultTitle").innerHTML = "DESENGORDURANTE + ÁLCOOL:"
            document.getElementById("Result").innerHTML = "Reação:A combinação de desengordurante e álcool pode resultar em vapores potencialmente inflamáveis.<br><br>Usos Comuns:<br><br>· Não é recomendado misturar desengordurante com álcool devido aos riscos associados.<br><br> Perigos: A reação pode produzir vapores inflamáveis e tóxicos que podem causar irritação nas vias respiratórias, olhos e pele.<br><br>Recomendações:<br><br>· Evite combinar desengordurante com álcool.<br>· Mantenha os dois produtos em locais separados. "
        }
        if((selectedtext2 == "Álcool" && selectedtext == "Desinfetante") || (selectedtext2 == "Desinfetante" && selectedtext == "Álcool") ){  
            document.getElementById("ResultTitle").innerHTML = "DESINFETANTE + ÁLCOOL:"
            document.getElementById("Result").innerHTML = "Reação:A combinação de desinfetante desodorizante e álcool pode resultar em vapores potencialmente inflamáveis.<br><br>Usos Comuns:<br><br>· Não é recomendado misturar desinfetante desodorizante com álcool devido aos riscos associados.<br><br> Perigos: A reação pode produzir vapores inflamáveis e tóxicos que podem causar irritação nas vias respiratórias, olhos e pele.<br><br>Recomendações:<br><br>· Evite combinar desinfetante desodorizante com álcool.<br>· Mantenha os dois produtos em locais separados. "
        }
        if((selectedtext2 == "Álcool" && selectedtext == "Água Oxigenada") || (selectedtext2 == "Água Oxigenada" && selectedtext == "Álcool") ){  
            document.getElementById("ResultTitle").innerHTML = "ÁGUA OXIGENADA + ÁLCOOL:"
            document.getElementById("Result").innerHTML = "Reação:A combinação de água oxigenada e álcool pode resultar na liberação de vapores potencialmente inflamáveis.<br><br>Usos Comuns:<br><br>· Não é recomendado misturar água oxigenada com álcool devido aos riscos associados.<br><br> Perigos:A reação pode produzir vapores inflamáveis e tóxicos que podem causar irritação nas vias respiratórias, olhos e pele.<br><br>Recomendações:<br><br>· Evite combinar água oxigenada com álcool.<br>· Mantenha os dois produtos em locais separados."
        }
        if((selectedtext2 == "Vinagre" && selectedtext == "Água Sanitária") || (selectedtext2 == "Água Sanitária" && selectedtext == "Vinagre") ){  
            document.getElementById("ResultTitle").innerHTML = "ÁGUA SANITÁRIA + VINAGRE:"
            document.getElementById("Result").innerHTML = "Reação:A combinação de água sanitária e vinagre pode produzir vapores tóxicos de gás cloro.<br><br>Usos Comuns:<br><br>· Não deve ser utilizado como mistura devido aos riscos envolvidos.<br><br> Perigos:A reação pode resultar em vapores tóxicos que causam queimadura química nas vias respiratórias, olhos e pele. Em casos graves, pode levar a complicações respiratórias.<br><br>Recomendações:<br><br>· Nunca misture água sanitária com vinagre.<br>· Mantenha os dois produtos em locais separados."
        }
        if((selectedtext2 == "Álcool" && selectedtext == "Água Sanitária") || (selectedtext2 == "Água Sanitária" && selectedtext == "Álcool") ){  
            document.getElementById("ResultTitle").innerHTML = "ÁLCOOL + ÁGUA SANITÁRIA:"
            document.getElementById("Result").innerHTML = "Reação:A combinação de álcool e água sanitária pode produzir vapores tóxicos e inflamáveis.<br><br>Usos Comuns:<br><br>· Não deve ser utilizado como mistura devido aos riscos envolvidos.<br><br> Perigos:A reação pode resultar em vapores tóxicos e inflamáveis que causam irritação nas vias respiratórias, olhos e pele.<br><br>Recomendações:<br><br>· Evite combinar álcool com água sanitária.<br>· Mantenha os dois produtos em locais separados."
        }
        if((selectedtext2 == "Amaciante" && selectedtext == "Vanish") || (selectedtext2 == "Vanish" && selectedtext == "Amaciante") ){  
            document.getElementById("ResultTitle").innerHTML = "AMACIANTE + VANISH:"
            document.getElementById("Result").innerHTML = "Reação:A combinação de amaciante e Vanish não resulta em reações químicas perigosas, mas pode comprometer a eficácia dos produtos.<br><br>Usos Comuns:<br><br>· Não é recomendado misturar amaciante com Vanish, pois podem neutralizar os efeitos um do outro.<br><br> Perigos:Não há perigos significativos associados a esta mistura, mas pode resultar em resultados de limpeza insatisfatórios.<br><br>Recomendações:<br><br>· Use amaciante e Vanish separadamente para garantir a eficácia máxima."
        }
        if((selectedtext2 == "Alvejante (Cloro)" && selectedtext == "Vinagre") || (selectedtext2 == "Vinagre" && selectedtext == "Alvejante (Cloro)") ){  
            document.getElementById("ResultTitle").innerHTML = "ALVEJANTE (cloro) + VINAGRE:"
            document.getElementById("Result").innerHTML = "Reação:a combinação de alvejante (cloro) e vinagre pode liberar vapores de cloro.<br><br>Usos Comuns:<br><br>· Não deve ser utilizado como mistura devido aos riscos envolvidos.<br><br> Perigos:A reação pode resultar em vapores tóxicos que causam irritação nas vias respiratórias, olhos e pele. Em casos graves, pode levar a complicações respiratórias.<br><br>Recomendações:<br><br>· Nunca misture alvejante com vinagre.<br>· Mantenha os dois produtos em locais separados. "
        }
        if((selectedtext2 == "Álcool em Gel" && selectedtext == "Água Sanitária") || (selectedtext2 == "Água Sanitária" && selectedtext == "Álcool em Gel") ){  
            document.getElementById("ResultTitle").innerHTML = "ÁGUA SANITÁRIA + ÁLCOOL EM GEL:"
            document.getElementById("Result").innerHTML = "Reação:A combinação de água sanitária (hipoclorito de sódio) e álcool em gel pode produzir vapores tóxicos, clorofórmio e ácido muriático.<br><br>Usos Comuns:<br><br>· Não deve ser utilizado como mistura devido aos riscos envolvidos.<br><br> Perigos:A reação pode resultar em vapores irritantes e corrosivos que causam irritação nas vias respiratórias, olhos e pele. O clorofórmio e o ácido muriático podem prejudicar nossos pulmões, rins, fígado, olhos e pele.<br><br>Recomendações:<br><br>· Evite combinar água sanitária com álcool em gel.<br>· Mantenha os dois produtos em locais separados. "
        }
        if((selectedtext2 == "Desentupidores de Pia" && selectedtext == "Detergente") || (selectedtext2 == "Detergente" && selectedtext == "Desentupidores de Pia") ){  
            document.getElementById("ResultTitle").innerHTML = "DETERGENTE + DESENTUPIDORES DE PIA:"
            document.getElementById("Result").innerHTML = "Reação:A combinação de detergente e desentupidores são muito danosos à saúde, mesmo sozinhos. Pois possuem altos teores de ácidos para cumprir a função de liberar os ralos e dutos.<br><br>Usos Comuns:<br><br>· Não deve ser utilizado como mistura devido aos riscos envolvidos.<br><br> Perigos:Não é recomendado misturar detergente com desentupidores pois a junção dos desentupidores químicos com detergentes libera gases tóxicos com cheiro forte, que podem causar náuseas e mal-estar.<br><br>Recomendações:<br><br>· Use detergente e desentupidores de pia separadamente para garantir a eficácia máxima e evitar acidentes. "
        }
        if((selectedtext2 == "Limpa Alumínio" && selectedtext == "Detergente") || (selectedtext2 == "Detergente" && selectedtext == "Limpa Alumínio") ){  
            document.getElementById("ResultTitle").innerHTML = "LIMPA ALUMÍNIO + DETERGENTE:"
            document.getElementById("Result").innerHTML = "Reação:Produtos limpa alumínio pode ser alcalinos. Ou seja, com bases fortes como o hidróxido de sódio ou hidróxido de potássio. E ácidos fortes, como ácido clorídrico, sulfúrico, fosfórico e nítrico.<br><br>Usos Comuns:<br><br>· Não deve ser utilizado como mistura devido aos riscos envolvidos.<br><br> Perigos:Misturar esses produtos com detergentes pode liberar gases tóxicos de cheiro forte.<br><br>Recomendações:<br><br>· Use limpa alumínio e detergente separadamente para garantir a eficácia máxima e evitar acidentes."
        }
        if((selectedtext2 == "Limpa Vidros" && selectedtext == "Desinfetante") || (selectedtext2 == "Desinfetante" && selectedtext == "Limpa Vidros") ){  
            document.getElementById("ResultTitle").innerHTML = "DESINFETANTE + LIMPA-VIDROS:"
            document.getElementById("Result").innerHTML = "Reação:A combinação de desinfetante e limpa-vidros não resulta em reações químicas perigosas.<br><br>Usos Comuns:<br><br>· Não é recomendado misturar desinfetante com limpa-vidros, pois podem interferir na eficácia um do outro.<br><br> Perigos:Essa mistura de produtos de limpeza pode deixar manchas e resíduos nas superfícies, comprometendo o brilho e a transparência das superfícies de vidro.<br><br>Recomendações:<br><br>· Use desinfetante e limpa-vidros separadamente para garantir a eficácia máxima"
        }
        if((selectedtext2 == "Água Sanitária" && selectedtext == "Sabão em Pó") || (selectedtext2 == "Sabão em Pó" && selectedtext == "Água Sanitária") ){  
            document.getElementById("ResultTitle").innerHTML = "SABÃO EM PÓ E ÁGUA SANITÁRIA:"
            document.getElementById("Result").innerHTML = "Reação:Não é recomendado misturar sabão em pó com cloro devido aos riscos associados. Essa combinação pode resultar em uma reação química imprevisível.<br><br>Usos Comuns:<br><br>· É importante evitar a mistura de sabão em pó com cloro devido aos perigos envolvidos.<br><br> Perigos: A reação entre sabão em pó e cloro pode resultar em vapores irritantes e potencialmente tóxicos. Além disso, pode haver liberação de substâncias prejudiciais à saúde.<br><br>Recomendações:<br><br>· Nunca misture sabão em pó com cloro.<br>· Mantenha os dois produtos em locais separados."
        }
        if((selectedtext2 == "Detergente" && selectedtext == "Querosene") || (selectedtext2 == "Querosene" && selectedtext == "Detergente") ){  
            document.getElementById("ResultTitle").innerHTML = "QUEROSENE E DETERGENTE:"
            document.getElementById("Result").innerHTML = "Reação:A combinação de querosene e detergente não é recomendada devido aos riscos associados. Não há uma reação específica entre esses dois produtos, mas sua combinação pode resultar em uma mistura inflamável e perigosa.<br><br>Usos Comuns:<br><br>· Não é aconselhável misturar querosene com detergente devido aos riscos de segurança envolvidos.<br><br> Perigos:A mistura de querosene e detergente pode criar uma solução altamente inflamável, aumentando significativamente o risco de incêndio e explosão. Além disso, ambos os produtos podem ser prejudiciais à saúde se inalados ou em contato com a pele.<br><br>Recomendações:<br><br>· Evite a combinação de querosene com detergente.<br>· Mantenha esses produtos em locais separados e longe de fontes de calor ou chamas."
        }
        if((selectedtext2 == "Detergente" && selectedtext == "Multiuso") || (selectedtext2 == "Multiuso" && selectedtext == "Detergente") ){  
            document.getElementById("ResultTitle").innerHTML = "DETERGENTE E MULTIUSO:"
            document.getElementById("Result").innerHTML = "Reação:A combinação de detergente e multiuso pode criar uma solução de limpeza eficaz para várias superfícies.<br><br>Usos Comuns:<br><br>· Pode ser usado para limpeza geral em diferentes superfícies.<br><br> Perigos:Quando usada corretamente, essa mistura não apresenta perigos significativos.<br><br>Recomendações:<br><br>· Siga as instruções de uso de cada produto.<br>· Teste em uma pequena área antes de aplicar em toda a superfície."
        }
        if((selectedtext2 == "Detergente" && selectedtext == "Sabão em Pó") || (selectedtext2 == "Sabão em Pó" && selectedtext == "Detergente") ){  
            document.getElementById("ResultTitle").innerHTML = "DETERGENTE E SABÃO EM PÓ:"
            document.getElementById("Result").innerHTML = "Reação:A combinação de detergente e sabão em pó pode criar uma solução de limpeza mais potente.<br><br>Usos Comuns:<br><br>· Eficaz na remoção de sujeira difícil.<br><br> Perigos:Quando usada corretamente, essa mistura não apresenta perigos significativos.<br><br>Recomendações:<br><br>· Use luvas de proteção ao manusear a mistura.<br>· Mantenha a área bem ventilada."
        }
        if((selectedtext2 == "Água Sanitária" && selectedtext == "Querosene") || (selectedtext2 == "Querosene" && selectedtext == "Água Sanitária") ){  
            document.getElementById("ResultTitle").innerHTML = "QUEROSENE E ÁGUA SANITÁRIA:"
            document.getElementById("Result").innerHTML = "Reação:A combinação de água sanitária e querosene pode resultar em uma reação violenta, com liberação de calor e vapores tóxicos.<br><br>Usos Comuns:<br><br>· Esta mistura não deve ser feita devido aos riscos extremamente elevados.<br><br> Perigos:A reação entre água sanitária e querosene pode produzir vapores altamente tóxicos e inflamáveis. A inalação desses vapores pode causar danos sérios às vias respiratórias e outros sistemas do corpo.<br><br>Recomendações:<br><br>· Nunca misture água sanitária com querosene. Manter esses produtos bem longe um do outro é crucial para a segurança."
        }
        if((selectedtext2 == "Limpa Pedra" && selectedtext == "Cloro") || (selectedtext2 == "Cloro" && selectedtext == "Limpa Pedra") ){  
            document.getElementById("ResultTitle").innerHTML = "LIMPA PEDRA E CLORO:"
            document.getElementById("Result").innerHTML = "Reação: A combinação de limpa pedra e cloro pode resultar em uma reação química que libera vapores tóxicos.<br><br>Usos Comuns:<br><br>· Não é recomendado misturar limpa pedra com cloro devido aos riscos associados.<br><br> Perigos:A reação pode gerar vapores tóxicos que são irritantes para as vias respiratórias, olhos e pele. A exposição prolongada pode levar a complicações respiratórias<br><br>Recomendações:<br><br>· Evite combinar limpa pedra com cloro.<br>· Mantenha os dois produtos em locais separados."
        }
}