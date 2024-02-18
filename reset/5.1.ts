/**
 * Git – Reset – Жесткий reset --hard: отмена изменений, удаление коммитов
 *
 * Знак @ === HEAD
 * Знак ~ указывает сколько коммитов назад
 *
 * Например, нам нужно сделать reset на два коммита назад
 *
 * git reset --hard HEAD~2 === git reset --hard @~2 === git reset --hard <id commit>
 *
 * Например, мы сделали reset запушили и нужно откатить назад
 *
 * Мы можем посмотреть id commit в git reflog или использовать git reset --hard 0RIG_HARD
 *
 * * git reset --hard <id commit>
 *
 */
