import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import ArrowSelectDown from '../assets/arrow_select_down.svg';
import ArrowSelectUp from '../assets/arrow_select_up.svg';
import { MATCH_STATUS_ALL, MATCH_STATUSES, MatchesStatusSelect, NamesByMatchStatus } from '../constants/matches-status.constants';

const DEFAULT_MATCH_STATUS: MatchesStatusSelect = MATCH_STATUS_ALL;

type DropdownMenuProps = {
  onSelect: (status: MatchesStatusSelect) => void;
}


const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  dropdownButton: {
    height: 56,
    backgroundColor: '#0B0E12',
    padding: 12,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#171D25',
  },
  dropdownText: {
    color: 'white',
    fontSize: 16,
  },
  dropdownMenu: {
    position: 'absolute',
    top: 45,
    width: '100%',
    backgroundColor: '#0B0E12',
    borderRadius: 6,
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
    zIndex: 10,
    marginTop: 20,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  itemSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: '#171D25',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 15,
  },
});

export const DropdownMenu = (props: DropdownMenuProps) => {
  const { onSelect } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<MatchesStatusSelect>(DEFAULT_MATCH_STATUS);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (status: MatchesStatusSelect) => {
    setSelectedStatus(status);
    onSelect(status);
    setIsOpen(false);
  };

  const handleOutsidePress = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
          <Text style={styles.dropdownText}>{NamesByMatchStatus[selectedStatus]}</Text>
          {isOpen ? <ArrowSelectUp /> : <ArrowSelectDown />}
        </TouchableOpacity>

        {isOpen && (
          <>
          <TouchableWithoutFeedback onPress={handleOutsidePress}>
            <View style={styles.overlay} />
          </TouchableWithoutFeedback>  
          <View style={styles.dropdownMenu}>
            <FlatList
              data={MATCH_STATUSES}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => handleSelect(item)}
                >
                  <Text style={styles.dropdownText}>{NamesByMatchStatus[item]}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
          </>
        )}
      </View>
  );
};

