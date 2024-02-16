/**
 * Слияние веток fast-forward
 *
 * Интересно, все привыкли думать, что заливаем изменения из fix в мастер, а на самом деле у нас указатель мастера
 * переносится на fix
 *
 * Например, мы залили какие-то изменения в мастер и хотим откатиться обратно,
 * Один из способов переставить указатель master на место, где он был
 *
 * git branch -f master  <id commit>45a4
 *
 * Но мы можем не помнить id commit'a и в этом случае гит на страхует перед командой merge git сохраняет старый id в папке .git/ORIG_HEAD и мы можем указывать его в качестве ссылки
 *
 * git branch -f master ORIG_HEAD
 */
