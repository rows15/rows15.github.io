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
Rodar um aplicativo de sincronização (FolderSync) com 2 funções progamadas a cada hora, ou a cada intervalo de horas
<br>
#### Exemplo (a cada 12h):
    - As 01:00 é rodado o script de Sincronização Celular > Pasta no Nas 
    (Transferencia inicial de arquivos pesados)
    
    - As 02:00 é rodado o script de Sincronização Celular > Pasta no Nas (Transferencia secundária de arquivos leves)

    - Assim que detectada a transferencia secundária é rodado o script do passo 2 
    (remoção das pastas compartilhadas do Nas)

    - As 2:05 é rodado o script de Sincronização Nas > Celular 
    (onde a pasta vazia é sincronizada, deletando os arquivos do celular)

    Ponto negativo:
    arquivos recebidos das 2:00 até as 2:05 serão descartados


### Passo 2 - Servidor > Organização |=>
---
O servidor automaticamente separa as imagens, videos e arquivos em semanas
### Passo 3 - Organização > Album final |=>
---
Mensalmente analisar e arquivar as fotos nas devidas pastas
### Pastas Sincronizadas
---
| Celular | Nas |
| --- | ----------- |
| DCIM/Camera | Camera |
| Download | Downloads |
| Movies/Instagram | Instagram |
| Pictures/Instagram | Instagram |
| DCIM/Screenshots | Screenshots |
| Android/media/com.whatsapp/WhatsApp/Media/WhatsApp Documents | WZDocuments |
| Android/media/com.whatsapp/Whatsapp/Media/WhatApp Images | WZImages |
| Android/media/com.whatsapp/Whatsapp/Media/Whatsapp Video | WZVideos |

### Arquivos Ignoráveis
```
.nomedia
Thumbs.db
```