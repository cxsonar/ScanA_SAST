            return '"' + s.replace(/(["\\$`!])/g, '\\$1') + '"';
        }
        else {
            return String(s).replace(/([A-z]:)?([#!"$&'()*,:;<=>?@\[\\\]^`{|}])/g, '$1\\$2');
            return String(s).replace(/([A-Za-z]:)?([#!"$&'()*,:;<=>?@\[\\\]^`{|}])/g, '$1\\$2');
        }
    }).join(' ');
};
