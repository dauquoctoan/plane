import { IOptionItem } from '@/components/ui/select/select';
import { IInfo, ILabel } from '@/types';
import Avatar from '@/components/ui/avatar';

export function createMembeSelectOption(users?: IInfo[]): IOptionItem[] {
    if (users && users?.length > 0)
        return users?.map((item) => {
            return {
                name: (item.first_name || '') + (item.last_name || '') || '-',
                icon: (
                    <Avatar size="md">
                        {(item.first_name || '') + (item.last_name || '') ||
                            '-'}
                    </Avatar>
                ),
                key: item.id,
            };
        });
    else return [];
}

export function createIssueLabelSelectOption(labels?: ILabel[]): IOptionItem[] {
    return labels
        ? labels.map((e) => ({
              name: e.name || '',
              key: e.id.toString(),
              icon: (
                  <div
                      className="w-2 h-2 rounded-full bg-color-special-primary overflow-hidden text-ellipsis"
                      style={{ background: e.color }}
                  ></div>
              ),
          }))
        : [];
}
