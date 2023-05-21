export const validateUpload = (files: FileList, allFiles: number) => {
    const filesArray = Array.from(files);

    // Проверка на ограничение суммарного размера файлов
    const maxSizeBytes = 1048576; // 1 мегабайт
    let totalSize = 0;

    for (const file of filesArray) {
        totalSize += file.size;
    }

    if (totalSize > maxSizeBytes) {
        console.log("Превышен суммарный размер файлов");
        return false;
    }

    // Проверка на ограничение количества файлов
    const maxFileCount = 19 - allFiles;
    if (filesArray.length > maxFileCount) {
        console.log("Превышено количество файлов");
        return false;
    }

    return true;
};