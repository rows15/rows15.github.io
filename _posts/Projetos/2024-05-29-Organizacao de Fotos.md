---
layout: post
title:  Organizacao de Fotos
date:  2024-05-29 23:10:11 -0300
categories: Projetos
tags:  [memories, code]
catbank: [Projetos,Memorias,Ideias,Blog,Misc,Meta]
tagbank: [music,code,trips,memories,misc,meta]
---


## Objetivo: 

Não ter o celular explodindo de arquivos depois de 1 ano de uso e precisar fazer a faxina gigantesca anual obrigatória devida à falta de espaço. Automatizando a transferencia e exclusão dos arquivos, e a pré organização
## Procedimento:


### Passo 1 - Sync das pastas do celula com o Nas
---
Automaticamente é rodado um aplicativo de sincronização (FolderSync) com 2 funções progamadas a cada hora, ou a cada intervalo de horas
<br>
#### Exemplo (a cada 12h):
    - As 01:00 é rodada a Sincronização Celular > Pasta no Nas 
    (Transferencia (e remoção automática do celular) inicial de arquivos pesados)
    





### Passo 2 - Servidor > Organização |=>
---
O servidor automaticamente separa as imagens, videos e arquivos
#### Exemplo (a cada 12h):
    - As 02:00 é rodado o script do Nas de Pasta Sincronizada > Pasta Dump Organizada Tipos de Mídia
### Passo 3 - Organização > Estoque final |=>
---
Semanalmente e manualmente analisar e arquivar as fotos nas devidas pastas datadas do estoque

### Passo 4 - Estoque Final > Album |=>
---
Com as fotos Categorizadas, manualmente colocar em um Album na cloud de fácil acesso com as melhores fotos de:
- Viagens
- ProfilePics (3 em 3 anos)
- Lembranças Importantes
  
### Pastas Sincronizadas
<!-- ---
| Celular | Nas |
| --- | ----------- |
| DCIM/Camera | Camera |
| Download | Downloads |
| Movies/Instagram | Instagram |
| Pictures/Instagram | Instagram |
| DCIM/Screenshots | Screenshots |
| Android/media/com.whatsapp/WhatsApp/Media/WhatsApp Documents | WZDocuments |
| Android/media/com.whatsapp/Whatsapp/Media/WhatApp Images | WZImages |
| Android/media/com.whatsapp/Whatsapp/Media/Whatsapp Video | WZVideos | -->

<table id="dynamicTable">
    <thead>
        <tr>
            <th>Celular</th>
            <th>Nas</th>
        </tr>
    </thead>
    <tbody>
        <!-- Rows will be inserted here by JavaScript -->
    </tbody>
</table>

<script>
    const data = [
        ["DCIM/Camera", "Camera"],
        ["Download", "Downloads"],
        ["Movies/Instagram", "Instagram"],
        ["Pictures/Instagram", "Instagram"],
        ["DCIM/Screenshots", "Screenshots"],
        ["Android/media/com.whatsapp/WhatsApp/Media/WhatsApp Documents", "WZDocuments"],
        ["Android/media/com.whatsapp/Whatsapp/Media/WhatApp Images", "WZImages"],
        ["Android/media/com.whatsapp/Whatsapp/Media/Whatsapp Video", "WZVideos"]
    ];

    const tableBody = document.querySelector("#dynamicTable tbody");

    data.forEach(row => {
        const tr = document.createElement("tr");
        row.forEach(cell => {
            const td = document.createElement("td");
            td.textContent = cell;
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
</script>


### Arquivos Ignoráveis
```
.nomedia
Thumbs.db
```