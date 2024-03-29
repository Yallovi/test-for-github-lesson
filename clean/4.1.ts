/**
 * Git – Удаление "лишних" файлов и незакоммиченных изменений
 *
 * Например, если файлы/папки были созданы, но не добавлены в индекс (git add), чтоб удалить их все понадобится
 * команда git clean
 *
 * Удалит все файлы и также все каталоги, которые в результате станут пустыми. Параметр -f (сокращение от слова
 * force — заставить) означает принудительное удаление, подчеркивая, что вы действительно хотите это сделать
 * * git clean -f -d
 *
 * Чтоб удалить файлы которые находятся в gitignore нужно передать флаг -x
 * git clean -f -x
 *
 *
 */
